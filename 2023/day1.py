import re


def calculateDigits(lines):
    running_total = 0
    patt = re.compile('[A-z]+', re.UNICODE)

    for line in lines:
        line = line.strip()
        line = patt.sub('', line)

        N_NUMBERS = len(line)
        if N_NUMBERS == 1:
            running_total += 11 * int(line[0])
        elif N_NUMBERS > 1:
            running_total += 10 * int(line[0]) + int(line[-1])

    return running_total


def part1():
    filename = "1.txt"
    input_file = open(filename, "r")

    print("part1", calculateDigits(input_file.readlines()))


def part2():
    digitsMap = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    }

    filename = "1.txt"
    input_file = open(filename, "r")

    lines = input_file.readlines()
    for i, line in enumerate(lines):
        line = line.lower()

        # first and last digit must be properly handled because of potential character overlap
        # (eg eighthree should be 8 not 3) and (twone should be 2ne not tw1)
        first_pos, first_key = None, None
        last_pos_key = []
        for key in digitsMap.keys():
            pos = line.find(key)
            if pos != -1:
                if first_pos is None or pos < first_pos:
                    first_pos, first_key = pos, key

            pos = line.rfind(key)
            if pos != -1:
                last_pos_key.append((pos, key))

        # Get the last or potential last key
        last_key = None
        last_pos_key.sort()

        N = len(last_pos_key)
        if N <= 1:
            last_key = None
        else:
            last_pos, last_key = last_pos_key[-1]
            potential_last_pos, potential_last_key = last_pos_key[-2]
            if potential_last_pos + len(potential_last_key) > last_pos:
                last_key = potential_last_key

        if first_key is not None:
            # print(first_key, last_key, line.strip(), end=" -> ")
            line = line.replace(first_key, str(digitsMap[first_key]), 1)
            if last_key is not None:
                line = line.replace(last_key, str(digitsMap[last_key]))
            # print(line.strip())

        for key in digitsMap.keys():
            line = line.replace(key, str(digitsMap[key]))

        lines[i] = line

    print("part2", calculateDigits(lines))


if __name__ == "__main__":
    part1()
    part2()
