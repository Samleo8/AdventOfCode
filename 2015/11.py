import re

input = "hepxcrrq"

'''
1. Passwords must include one increasing straight of at least three letters, like abc, bcd, cde, and so on, up to xyz. They cannot skip letters; abd doesn't count.
2. Passwords may not contain the letters i, o, or l, as these letters can be mistaken for other characters and are therefore confusing.
3. Passwords must contain at least two different, non-overlapping pairs of letters, like aa, bb, or zz.
'''
def valid_pwd(_str):
	#Second requirement
	if re.search(r"[i|o|l]",_str)!=None:
		#print("Invalid: Letters i/o/l found")
		return False

	#First requirement
	if re.search(r"(abc|bcd|cde|def|efg|fgh|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)",_str)==None:
		#print("Invalid: No straight increasing letters found")
		return False

	#Third requirement
	_pairs = re.findall(r"aa|bb|cc|dd|ee|ff|gg|hh|jj|kk|mm|nn|pp|qq|rr|ss|tt|uu|vv|ww|xx|yy|zz",_str)
	_pairs = list(set(_pairs))
	if len(_pairs)<2:
		#print("Invalid: Less than 2 unique repeating letter pairs found")
		return False

	return True

def incrementStr(_str):
	_str = list(_str)

	_abc = list("abcdefghijklmnopqrstuvwxyz")
	_abcToInd = {}
	for i in range(len(_abc)):
		_abcToInd[_abc[i]] = i

	l = len(_str)

	for i in reversed(range(l)):
		if _str[i]=='z':
			_str[i]='a'
			continue
		else:
			_str[i] = _abc[ _abcToInd[ _str[i] ]+1 ]
			break

	_str = "".join(_str)

	#print(_str)
	return _str

pwd = input

for n in range(1,3):
	while True:
		if valid_pwd(pwd):
			print("Valid Password "+str(n)+": "+pwd)
			pwd = incrementStr(pwd)
			break
		else:
			pwd = incrementStr(pwd)
