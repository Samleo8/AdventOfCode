#f = open("10.txt","r")
input = "1113222113" #3113322113

def lookAndSay(_input):
    curr = _input[0]
    output = ""
    count = 0
    for i in _input:
        if i == curr:
            count+=1
        else:
            output += str(count)+curr
            curr = i
            count = 1

    output += str(count)+curr #for the last dude

    #print(output)
    return output

for x in range(40):
    input = lookAndSay(input)
    print(input)

print()
print("Length (40 times): ",end='')
print(len(input))

for x in range(10):
    input = lookAndSay(input)
    print(input)

print()
print("Length (50 times): ",end='')
print(len(input))
