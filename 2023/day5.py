import re
import numpy as np

TESTING = True
NUMBER_RE = re.compile(r"\d+")
DAY = 5


def heading_from_string(s: str) -> str:
    return s.strip().replace(" map:", "").replace("-", "_")


def find_mapped_index(starting_index: int, mappings_list: np.ndarray) -> (int, int):
    # Sorted second column of src indices
    ending_inds = mappings_list[:, 0]
    starting_inds = mappings_list[:, 1]
    ranges = mappings_list[:, 2]

    # Find the index of the first starting index that is smaller than the given starting index
    row = len(starting_inds[starting_inds <= starting_index]) - 1
    pot_start_ind = starting_inds[row] if row >= 0 else starting_inds[0]

    end_ind = starting_index
    next_change_ind = -1

    # Check if the given starting index is within the range of the found starting index
    # Before first mapping (so default)
    if (starting_index < pot_start_ind):
        end_ind = starting_index
        next_change_ind = pot_start_ind
    # Exact match
    elif (starting_index == pot_start_ind):
        end_ind = ending_inds[row]
        next_change_ind = ending_inds[row +
                                      1] if row + 1 < len(ending_inds) else -1
    # Check if the given starting index is within the range of the found starting index
    else:
        delta = starting_index - pot_start_ind
        if delta < ranges[row]:
            end_ind = ending_inds[row] + delta
            next_change_ind = pot_start_ind + ranges[row]
        else:
            end_ind = starting_index
            next_change_ind = ending_inds[row +
                                          1] if row + 1 < len(ending_inds) else -1

    return end_ind, next_change_ind


def get_mappings(lines: list) -> dict:
    mappings = {}
    split_lines = "".join(lines).split("\n\n")
    for line in split_lines:
        sub_lines = line.strip().split("\n")
        heading = heading_from_string(sub_lines[0])
        content = sub_lines[1:]
        for i, sub_content in enumerate(content):
            content[i] = list(map(int, sub_content.split(" ")))
        content = np.array(content)
        content = content[content[:, 1].argsort()]

        mappings[heading] = content

    return mappings


def part(part_num: int):
    filename = f"{DAY}_test.txt" if TESTING else f"{DAY}.txt"

    ordering = [
        "seed_to_soil",
        "soil_to_fertilizer",
        "fertilizer_to_water",
        "water_to_light",
        "light_to_temperature",
        "temperature_to_humidity",
        "humidity_to_location"
    ]
    seeds = []
    mappings = {
        # "seed_to_soil": None,
        # "soil_to_fertilizer": None,
        # "fertilizer_to_water": None,
        # "water_to_light": None,
        # "light_to_temperature": None,
        # "temperature_to_humidity": None,
        # "humidity_to_location": None
    }
    '''
    NOTE: Mappings are in table format, each row is state. 
    First column is the dest index,
    second column is the src index,
    third column is the range.
    '''

    result = None
    with open(filename, "r") as f:
        lines = f.readlines()

        # Parse Lines
        # --Get seeds
        seeds = list(map(int, NUMBER_RE.findall(lines[0])))

        # --Get mappings for everything else in table format
        mappings = get_mappings(lines[2:])

        # Prune seeds
        if part_num == 2:
            temp_seeds = []
            temp_seed = None
            for i, seed in enumerate(seeds):
                if i % 2 == 0:
                    temp_seed = seed
                else:
                    temp_seeds.append((temp_seed, temp_seed + seed - 1))

        if part_num == 2:
            for (start_seed, end_seed) in temp_seeds:
                seed = start_seed
                continue
        else:
            # Perform the actual parsing for each seed
            for seed in seeds:
                start_ind = seed
                for heading in ordering:
                    # print(start_ind, end=" -> ")
                    start_ind, _ = find_mapped_index(start_ind, mappings[heading])
                # print(start_ind)

                if result is not None:
                    result = min(result, start_ind)
                else:
                    result = start_ind

    return result


if __name__ == "__main__":
    print("=====DAY", DAY, "=====")
    if TESTING:
        print("NOTE: IN TESTING MODE")

    print("Part 1:", part(1))
    print("Part 2:", part(2))
