import re
import numpy as np

def floodfill(grid: np.array, coord: (int, int), fill_fn: callable):
    shp = grid.shape
    
    # Invalid coord
    if coord[0] < 0 or coord[0] >= shp[0] or coord[1] < 0 or coord[1] >= shp[1]:
        return
    
    entry = grid[coord]
    # Invalid entry
    if entry == '.':
        return
    if len(entry) > 1:
        return
    
    # Fill
    grid[coord] = fill_fn(entry)
    
    # Recurse
    inc = [-1, 0, 1]
    for i in inc:
        for j in inc:
            if i == 0 and j == 0:
                continue
            floodfill(grid, (coord[0] + i, coord[1] + j), fill_fn)
    
def posToGridIndex(pos: int, height: int, width: int) -> (int, int):
    return (pos // height, pos % width) # row, col

def findAllSymbols(gridStr: str) -> list:
    symbol_pos = []
    for match in re.finditer(r"[^\d\.]", gridStr.replace('\n', '')):
        symbol_pos.append(match.start())

    return symbol_pos

def sumGrid(gridStr: str) -> int:
    return sum([int(x) for x in re.findall(r"\d+", gridStr)])

def gridStrToGrid(gridStr: str) -> np.array:
    grid = []
    for line in gridStr.strip().split("\n"):
        grid.append(list(line.strip()))
        
    return np.array(grid, dtype='object')

def gridToGridStr(grid)-> str:
    gridStr = ""
    for line in grid:
        gridStr += "".join(line) + "\n"
        
    return gridStr

def part1():
    filename = "3.txt"

    with open(filename, "r") as f:
        gridStr = f.read()
        
        # Get the total sums before any parsing
        starting_total = sumGrid(gridStr)
        
        symbols_pos = findAllSymbols(gridStr)
        grid = gridStrToGrid(gridStr)
        
        # Whiteout the true numbers near symbols
        for pos in symbols_pos:
            gridInd = posToGridIndex(pos, grid.shape[0], grid.shape[1])
            floodfill(grid, gridInd, lambda a: '.')
            
        gridStr = gridToGridStr(grid)
        ending_total = sumGrid(gridStr)
        
        return (starting_total - ending_total)

def decodeString(encoded_str: str, SEP: str, IND: str) -> (int, int):
    enc_val = re.search(rf"\{SEP}\{IND}[\d]+\{SEP}", encoded_str).group(0)
    
    ind = int(enc_val[2:-1])
    decoded_int = int(encoded_str.replace(enc_val, ''))
            
    return ind, decoded_int

def extractGridNumbers(gridStr: str, SEP: str, IND: str) -> list:
    gridNumbers = {}
    for match in re.finditer(rf"([\d\{SEP}\{IND}]+)", gridStr):
        encoded_str = match.group(1)
        ind, num = decodeString(encoded_str, SEP, IND)
        
        if ind not in gridNumbers:
            gridNumbers[ind] = [num]
        else:
            gridNumbers[ind].append(num)
        
    return gridNumbers
    
def part2():
    filename = "3.txt"

    with open(filename, "r") as f:
        SEP = "|"
        IND = "/" 
        gridStr = f.read().replace(SEP, '.').replace(IND, '.')

        symbols_pos = findAllSymbols(gridStr)
        grid = gridStrToGrid(gridStr)
        
        # Floodfill and mark all gear numbers
        for i, pos in enumerate(symbols_pos):
            gridInd = posToGridIndex(pos, grid.shape[0], grid.shape[1])
            if grid[gridInd] == '*':
                s = IND + str(i)
                floodfill(grid, gridInd, lambda x: x + SEP + s + SEP if x.isnumeric() else '.')
            else:
                grid[gridInd] = '.'
                
        for r in range(grid.shape[0]):
            for c in range(grid.shape[1]):
                if len(grid[r][c]) == 1: 
                    grid[r][c] = '.'
        
        # Convert to string and extract all grid numbers
        gridStr2 = gridToGridStr(grid)
        gridNumbers = extractGridNumbers(gridStr2, SEP, IND)
        
        total = 0
        for ind in gridNumbers:
            ls = gridNumbers[ind]
            if len(ls) == 2:
                total += np.array(ls).prod()

        return total
    
if __name__ == "__main__":
    print("Part 1:", part1())
    print("Part 2:", part2())
