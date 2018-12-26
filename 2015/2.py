f = open("2.txt","r")

totalSA = 0
totalRibbon = 0

#Function for calculating
def surfaceArea(l,w,h):
    return 2*l*w+2*w*h+2*l*h+min(l*w,w*h,l*h)

def ribbonNeeded(l,w,h):
    shortest = min(l,w,h)
    next_shortest = (l+w+h)-min(l,w,h)-max(l,w,h)
    return l*w*h + 2*(shortest+next_shortest)

for data in f:
    n = list(map(int,data.split("x")))
    s = surfaceArea(n[0],n[1],n[2])
    r = ribbonNeeded(n[0],n[1],n[2])

    totalSA+=s
    totalRibbon+=r

print("Total Surface Area:",end=" ")
print(totalSA)

print("Total Ribbon Needed:",end=" ")
print(totalRibbon)
