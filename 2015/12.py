import re
import numpy as np

f = open("12.txt","r")

line = f.readlines()[0].strip()

numbers = list(map(int, re.findall(r"([-0-9]+)",line)))

#print(numbers)
print("Sum of numbers 1:",end=' ')
print(np.sum(numbers))

f.close()

f = open("12b.txt","r") #12b is done through a combination of RegExp and JS

line = f.readlines()[0].strip()

numbers = list(map(int, re.findall(r"([-0-9]+)",line)))

#print(numbers)
print("Sum of numbers 2:",end=' ')
print(np.sum(numbers))

f.close()
