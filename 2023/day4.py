import re
import numpy as np

TESTING = False
NUMBER_RE = re.compile(r"\d+")

# Return (id, winning numbers dict, current numbers)


def parseLine(line: str) -> (int, dict, list[int]):
    arr = line.strip().split(":")
    card_id = int(arr[0].split("Card")[1])

    winning_list, current_list = arr[1].split(" | ")
    winning_list = re.findall(NUMBER_RE, winning_list)
    current_list = list(map(int, re.findall(NUMBER_RE, current_list)))

    winning = {}
    for num in winning_list:
        winning[int(num)] = 0

    return card_id, winning, current_list


def part(part_num: int):
    filename = "4_test.txt" if TESTING else "4.txt"
    cache_total = {}
    card_ids = []

    with open(filename, "r") as f:
        lines = f.readlines()

        for line in lines:
            card_id, winning, current_list = parseLine(line)
            card_ids.append(card_id)

            total = 0
            for num in current_list:
                if num in winning:
                    winning[num] += 1
                    total += 1

            if total > 0:
                cache_total[card_id] = total

    cache_results = {}
    result = 0
    if part_num == 1:
        for card_id in cache_total:
            result += 2 ** (cache_total[card_id] - 1)
    elif part_num == 2:
        for card_id in reversed(card_ids):
            total = cache_total.get(card_id, 0)

            temp_result = 1  # itself

            # print(card_id, total, end=" ---> ")
            for i in range(1, total + 1):
                id_next = card_id + i
                # either cached results, or itself
                more_cards = cache_results.get(id_next, 1)
                temp_result += more_cards
                # print(f"{id_next}({more_cards})", end=" ")

            # print(" = ", temp_result)
            cache_results[card_id] = temp_result
            result += temp_result

    return result


if __name__ == "__main__":
    if TESTING:
        print("NOTE: IN TESTING MODE")

    print("Part 1:", part(1))
    print("Part 2:", part(2))
