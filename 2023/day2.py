import re


def parseAction(rnd: str) -> bool:
    bag = {
        "red": 12,
        "green": 13,
        "blue": 14
    }

    num, color = rnd.strip().split(" ")
    num = int(num)

    if color not in bag.keys():
        return False

    if num > bag[color]:
        return False

    return True


def parseAction2(rnd: str, bag: dict) -> dict:
    num, color = rnd.strip().split(" ")
    num = int(num)

    if color not in bag.keys():
        return 0

    bag[color] = max(num, bag[color])

    return bag


def parseGame(line: str, part: int = 1):
    game_num, game_play = line.strip().lower().split(":")
    game_num = int(game_num.split("game ")[1])
    game_play = game_play.strip().split(";")

    bag = {
        "red": 0,
        "green": 0,
        "blue": 0
    }

    # parse game_play
    for game_round in game_play:
        actions = game_round.split(", ")
        for action in actions:
            if part == 1:
                action_pass = parseAction(action)
                if action_pass == False:
                    return 0
            elif part == 2:
                bag = parseAction2(action, bag)
                
    if part == 1:
        return game_num
    else:
        result = 1
        for color in bag:
            result *= bag[color]
            
        return result

def part(part_num: int):
    filename = "2.txt"

    with open(filename, "r") as f:
        lines = f.readlines()

        total = 0
        for line in lines:
            result = parseGame(line, part_num)
            # if (result == 0):
            #     print("Game failed:", line.strip())
            total += result

    return total


if __name__ == "__main__":
    print("Part 1:", part(1))
    print("Part 2:", part(2))
