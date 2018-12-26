f = open("3.txt","r")

#dir_character ( ^ v < >) : [x,y]
dir = {
	"^":[0,-1],
	"v":[0,1],
	"<":[-1,0],
	">":[1,0]
}

input = f.readlines()[0]
f.close()

###########
# PART 3A #
###########


# "x_y": number of presents
houses = {
	"0_0":1
}

currX = 0
currY = 0

santa = 0

for ch in list(input):
	currX += dir[ch][0]
	currY += dir[ch][1]

	coord = str(currX)+"_"+str(currY)
	if coord in houses:
		houses[coord]+=1
	else:
		houses[coord]=1

print("3a:",end='')
print(len(houses))

###########
# PART 3B #
###########

# "x_y": number of presents
houses = {
	"0_0":1
}

currX = [0,0]
currY = [0,0]

santa = 0

for ch in list(input):
	currX[santa] += dir[ch][0]
	currY[santa] += dir[ch][1]

	coord = str(currX[santa])+"_"+str(currY[santa])

	if coord in houses:
		houses[coord]+=1
	else:
		houses[coord]=1

	santa ^= 1

print("3b:",end='')
print(len(houses))
