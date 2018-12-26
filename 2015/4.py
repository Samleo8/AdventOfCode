import hashlib

key = "yzbqklnj"

found1 = False
found2 = False
n = 0

while True:
    s = key+str(n)
    h = hashlib.md5(s.encode("utf-8")).hexdigest()
    if (not found1) and h[:5] == "00000":
        print(n,end=' ')
        print(h)
        found1 = True
        
    if (not found2) and h[:6] == "000000":
        print(n,end=' ')
        print(h)
        found2 = True

    if found1 and found2:
        break

    n+=1
