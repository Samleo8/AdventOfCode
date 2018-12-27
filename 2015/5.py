import re

f = open("5.txt","r")
lines = f.readlines()

niceStrings = 0

for s in lines:
    s = s.strip()

    vowels = re.findall(r"(a|e|i|o|u)",s)
    #unique_vowels = list(set(vowels)) #remove duplicates!

    #It's a bad string (less than 3 unique vowels)
    if len(vowels)<3:
        continue

    repeated = re.findall(r"(aa|bb|cc|dd|ee|ff|gg|hh|ii|jj|kk|ll|mm|nn|oo|pp|qq|rr|ss|tt|uu|vv|ww|xx|yy|zz)",s)

    #It's a bad string (no repeated letters)
    if not len(repeated):
        continue

    naughty = re.findall(r"(ab|cd|pq|xy)",s)
    if len(naughty)>0:
        continue

    niceStrings+=1

print("Nice strings 1:",end=' ')
print(niceStrings)

niceStrings = 0

for s in lines:
    s = s.strip()
    print("\n"+s)

    between = re.findall(r"(a[a-z]a|b[a-z]b|c[a-z]c|d[a-z]d|e[a-z]e|f[a-z]f|g[a-z]g|h[a-z]h|i[a-z]i|j[a-z]j|k[a-z]k|l[a-z]l|m[a-z]m|n[a-z]n|o[a-z]o|p[a-z]p|q[a-z]q|r[a-z]r|s[a-z]s|t[a-z]t|u[a-z]u|v[a-z]v|w[a-z]w|x[a-z]x|y[a-z]y|z[a-z]z)",s)

    if not len(between):
        print("BAD: No in betweens")
        continue

    #######

    _pairs = [s[i:i+2] for i in range(len(s))]

    #overlaps need to be removed
    pairs = [ _pairs[0] ]
    for i in range(1,len(_pairs)):
        if _pairs[i]!=_pairs[i-1]:
            pairs.append(_pairs[i])

    #remove all "repeats". if anything is removed, it implies that there are pairs of pairs
    pairs_unique = list(set(pairs))

    if len(pairs_unique)==len(pairs):
        print("BAD: No pairs")
        continue

    niceStrings+=1

print("Nice strings 2:",end=' ')
print(niceStrings)
