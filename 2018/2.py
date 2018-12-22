#Python solution for AoC qn 2

f = open("2.txt","r")

strings = f.readlines()

#Part 1
freq_total = {
    "2":0,
    "3":0
}

for s in strings:
    s = s.strip().lower()

    freq_indv = {}

    #Count how many of each letter is inside
    for ch in s:
        if ch in freq_indv:
            freq_indv[ch]+=1
        else:
            freq_indv[ch]=1

    #Check how many found
    found = {
        "2":False,
        "3":False
    }

    for ch in freq_indv:
        if (not found["2"]) and freq_indv[ch]==2:
            found["2"] = True
            freq_total["2"]+=1
        elif (not found["3"]) and freq_indv[ch]==3:
            found["3"] = True
            freq_total["3"]+=1

        if found["2"] and found["3"]:
            break
        continue

print("Checksum: "+str(freq_total["2"]*freq_total["3"]))

#Part 2
found = False

for i in range(len(strings)-1):
    s1 = strings[i]
    for j in range(i+1,len(strings)):
        s2 = strings[j]

        different = 0
        found = True
        common = ""
        #Compare s1 and s2
        for k in range(min(len(s1),len(s2))):
            if s1[k] != s2[k]:
                different+=1
            else:
                common+=s1[k]

            if different>1:
                found = False
                break

        if found:
            print("Common Letters: "+common)
            break
    if found: break
