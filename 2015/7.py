import re
import numpy as np

f = open("7.txt","r")

lines = f.readlines()
lines.sort()
instructions = [l.strip() for l in lines]

signals = {}

def printSignals():
    print("Filled Signals:")
    for s in signals:
        if signals[s]!=-1:
            print(s,end=': ')
            print(signals[s])
    print()

def runSimulation():
        #Populate signals dictionary with -1
    _abc = list("abcdefghijklmnopqrstuvwxyz")

    for i in _abc:
        signals[i] = -1 #For single letters
        #For double letters
        for j in _abc:
            signals[i+j] = -1
            continue
        continue

    while len(instructions):
        indicesToRemove = []

        for i in range(len(instructions)):
            #printSignals()

            cmd = instructions[i]

            _cmds = cmd.split(" ")
            _outputGate = _cmds[len(_cmds)-1]

            #Is a number assignment (ie. number -> "aa")
            if len(_cmds)==3 and re.search(r"(\d+)",_cmds[0])!=None:
                signals[_cmds[len(_cmds)-1]] = np.uint16(_cmds[0])
                indicesToRemove.append(i)
                continue

            #Is a gate assignment (ie. "aa" -> "bb")
            if len(_cmds)==3 and re.search(r"(\w)",_cmds[0])!=None:
                if signals[_cmds[0]]!=-1: #Must make sure that "aa" has a signal value
                    signals[_outputGate] = np.uint16(signals[_cmds[0]])
                    indicesToRemove.append(i)
                continue

            #NOT operation (ie. NOT "aa" -> "bb")
            if _cmds[0]=="NOT":
                if signals[_cmds[1]]!=-1:
                    signals[_outputGate] = ~np.uint16(signals[_cmds[1]])
                    indicesToRemove.append(i)
                continue

            #AND operation (ie. ("aa"|number) AND "aa" -> "bb")
            #   !NOTE: First might be a number or gate
            if _cmds[1]=="AND":
                if signals[_cmds[2]]!=-1:
                    if re.search(r"(\d+)",_cmds[0]): #First is actually a number
                        signals[_outputGate] = np.uint16(_cmds[0])&np.uint16(signals[_cmds[2]])
                        indicesToRemove.append(i)
                    elif signals[_cmds[0]]!=-1: #Normal gate
                        signals[_outputGate] = np.uint16(signals[_cmds[0]])&np.uint16(signals[_cmds[2]])
                        indicesToRemove.append(i)
                continue

            if _cmds[1]=="OR":
                if signals[_cmds[0]]!=-1 and signals[_cmds[2]]!=-1:
                    signals[_outputGate] = np.uint16(signals[_cmds[0]])|np.uint16(signals[_cmds[2]])
                    indicesToRemove.append(i)
                continue

            if _cmds[1]=="LSHIFT":
                if signals[_cmds[0]]!=-1:
                    signals[_outputGate] = np.uint16(signals[_cmds[0]]*pow(2,np.uint16(_cmds[2])))
                    indicesToRemove.append(i)
                continue

            if _cmds[1]=="RSHIFT":
                if signals[_cmds[0]]!=-1:
                    signals[_outputGate] = np.uint16(signals[_cmds[0]]/pow(2,np.uint16(_cmds[2])))
                    indicesToRemove.append(i)
                continue

            print("ERROR: Command "+cmd+" not recognised!")

        #Remove according to indices
        indicesToRemove.sort(reverse = True)
        for i in indicesToRemove:
            del instructions[i]

        #break #TODO: Remove

    #printSignals()

#Part A
runSimulation()
print("--Part A--")
printSignals()
print("Signal \'a\':",end=' ')
print(signals["a"])

#Part B
f = open("7b.txt","r")

lines = f.readlines()
lines.sort()
instructions = [l.strip() for l in lines]

runSimulation()
print("--Part B--")
printSignals()
print("Signal \'a\':",end=' ')
print(signals["a"])
