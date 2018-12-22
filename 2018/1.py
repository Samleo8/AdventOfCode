#AoC 1, Python solution

f = open("1.txt","r")

sum = 0
numbers = {}

#Part 1
lines = f.readlines()
for line in lines:
    sum+=int(line)
print("Sum: "+str(sum))

#Part 2
sum = 0
found = False
while not found:
    for i in range(len(lines)):
        sum+=int(lines[i])

        if sum in numbers:
            print("Repeat number: "+str(sum))
            found = True
            break
        else:
            numbers[sum]=1

        continue

f.close()
