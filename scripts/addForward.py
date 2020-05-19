#prompt = input("Enter the ports that you would like to use. Separate multiple ports with a comma (e.g. 5001, 5002, etc.). To list a range of ports use - (e.g. 5001-5005) \n")
import json
def addForward(append, stringPorts):
    #removes any duplicate ports
    with open('config.json') as f:
                data2 = json.load(f)
    f.close()
    
    if stringPorts!= []:  
        addPorts = list(dict.fromkeys(parseText(stringPorts)))
        
        if(append):
            newPorts = []
            existingPorts = data2["interface"]["portForward"]
           # print("existing:"+str(existingPorts))

            for port in addPorts:
                if (not port in existingPorts):
                    newPorts.append(port)
                else:
                    print(str(port)+" is an existing port")  
            if (newPorts == []):
                return  
            else:     
                addPorts =existingPorts+newPorts
               

        addPorts.sort()

    ##if(addPorts == []):
    ##    print("\nPlease try again.")
    #replace  the array
        print("The following ports will be added: " + str(addPorts))
        data2["interface"]["portForward"]=addPorts
    else:
        data2["interface"]["portForward"]=[]

    with open('config.json', 'w') as outfile:
        json.dump(data2,outfile,indent = 4, sort_keys=True)  
    outfile.close()

def parseText(inputList):
    flag = True
    #parse the user inputted values
    listPorts = inputList.split(',')
    filteredPorts = []
    totalRangePorts = []

    #first check to see if there are any ranges in our list
    #then check to make sure all the other numbers entered are valid integers, and converts them to ints
    #if there are any invalid numbers, change flag to false
    rangePort = []
    for item in listPorts:
        if ("-" in item):
            rangePort.append(item.split("-"))
        elif(verifyInt(item)):
            filteredPorts.append(int(item))
        else:
            flag = False

    #converts any ranges into a list of ports. Only proceeds here if we have all valid numbers
    if(not rangePort == [] and flag):
        for singleRange in rangePort:
            if (verifyInt(singleRange[0]) and verifyInt(singleRange[1])):
                for n in range(int(singleRange[1])-int(singleRange[0]) + 1):
                    totalRangePorts.append(int(singleRange[0]) + n)
            else:
                flag = False

    if(flag):
        filteredPorts += totalRangePorts
        print("\nHere's a total list of ports you entered: " + str(filteredPorts))
    else:
        filteredPorts = []

    return filteredPorts

def verifyInt(value):
    try:
        int(value)
        return True
    except:
        print("\n" + value + " is an invalid port number!")
        return False


#addForward(False, prompt)