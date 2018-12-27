import re

N = 1000
grid = [ [0 for j in range(N)] for i in range(N) ] #create N by N size grid, all lights off
grid_brightness = [ [0 for j in range(N)] for i in range(N) ] #create N by N size grid, all lights off

def instruct(_type,x1,y1,x2,y2):
    for _y in range(y1,y2+1):
        for _x in range(x1,x2+1):
            if _type=="toggle":
                grid[_y][_x] ^= 1
                grid_brightness[_y][_x] += 2
            elif _type == "turn on":
                grid[_y][_x] |= 1
                grid_brightness[_y][_x] += 1
            elif _type == "turn off":
                grid[_y][_x] &= 0

                #keep the brightness to a minimum of 0
                if grid_brightness[_y][_x]>0:
                    grid_brightness[_y][_x] -= 1
            else:
                print("ERROR!")
                return
            continue
        continue
    return

f = open("6.txt","r")

for line in f:
    line = line.strip()
    numbers = list(map(int, re.findall(r"(\d+)",line)))
    type = re.findall(r"([A-Za-z ]+)",line)

    instruct(type[0].strip(),numbers[0],numbers[1],numbers[2],numbers[3])

print("Lit lights:",end=' ')
print(sum(map(sum, grid)))


print("Total Brightness (Part B):",end=' ')
print(sum(map(sum, grid_brightness)))
