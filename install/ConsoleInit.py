import os
import subprocess
import sys
import platform





def prRed(skk): print("\033[91m {}\033[00m" .format(skk)) 
# store current path
currentDir = os.path.dirname(os.path.realpath(__file__))
# Change to a http git directory only
httpClone = "https://gitlab.com/robert.kunc/osiris-front-end.git"
httpData = httpClone.split("/")
# grabs the final term in the git directory to make changes in that folder.
gitFolder = (httpData[-1].split("."))[0]
operatingSystem =platform.system()
#yarnVersion = str(subprocess.check_output("yarn --version", shell=True).strip().decode())
if operatingSystem == "Windows":
    pipVersion = str(subprocess.check_output("pip --version", shell=True).strip().decode())
#flask, flask-cors, passlib, psutil, pythonping 
def startApp(OpSys):
    if OpSys == "Windows":
        
        os.system('start cmd.exe @cmd /k "python hello.py"')
        os.system("yarn start")
    elif OpSys == "Linux":
       
        os.system('gnome-terminal -- python3 hello.py')
        os.system("yarn start")
    elif OpSys == "Darwin":
       
        #open mac terminal
        prRed("this needs to be update to work on mac")
        os.system("yarn start")



 
if len(sys.argv[1]) > 1:
    if sys.argv[1] == "new" or sys.argv[1] == "update":
        lineArg = sys.argv[1]
    elif sys.argv[1] == "run":
        lineArg = "run"
    else:
        lineArg = "update"
else:
    lineArg = "update"

if lineArg != "run":
#Windows Install Commands
    if operatingSystem == 'Windows':
        if pipVersion == "":
            if os.path.exists("./get-pip.py"):
                os.system("python get-pip.py")
            else: 
                prRed("Pip file missing")
                print("please install pip manually or include get-pip.py in this folder")
                exit()
        #os.system("python -m pip install --user virtualenv")
        os.system("python -m pip install npm")
        os.system("pip install pythonping")
        os.system("pip install psutil")
        os.system("pip install flask")
        os.system("pip install flask-cors")
        os.system("pip install passlib")
        #get yarn version, if it does not exist then install yarn
        
        # check to see if yarn is installed. If it isn't, then install yarn.
        '''
        if yarnVersion != '':
            print("Yarn is Installed!")
        else:
        # install yarn Windows
            print("Yarn is not Installed!")
        '''
        os.system("npm install --global yarn")




    #will install git and Curl
    elif operatingSystem == 'Linux':
        os.system('sudo apt update')
        os.system("sudo apt-get install python-virtualenv")
        os.system("sudo apt install python3-pip")
        os.system("sudo apt install git")
        os.system('pip3 install pythonping')
        os.system('pip3 install psutil')
        os.system("pip3 install flask")
        os.system("pip3 install flask-cors")
        os.system("pip3 install passlib")
        os.system('sudo apt-get install curl && sudo apt-get update curl')
        os.system('sudo apt-get install git && sudo apt-get update git')

        '''
        # check to see if yarn is installed. If it isn't, then install yarn.
        if yarnVersion != '':
            print("Yarn is Installed!")
            os.system("sudo apt-get update && sudo apt-get install yarn")
        else:
        # install yarn Ubuntu
        '''
        print("Yarn is not Installed!")
        os.system("sudo apt remove cmdtest")
        os.system("sudo apt remove yarn")
        os.system("curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -")
        os.system('echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list')
        os.system("sudo apt-get update && sudo apt-get install yarn")
            
else:
    print("Attempting to run Program...")
    if os.path.exists("./osiris-front-end"):
        os.chdir(gitFolder)
        startApp(operatingSystem)
        
    else:
        prRed("Required components are not installed.")
        print("Please run 'python ConsoleInit.py new' or 'python ConsoleInit.py update'")
        exit()



if lineArg == 'new':
    os.system("git clone " + httpClone)
    os.chdir(gitFolder)
    os.system("yarn install")
    startApp(operatingSystem)
    
elif lineArg == 'update':
    os.chdir(gitFolder)
    os.system("git pull")
    os.system("yarn install")
    startApp(operatingSystem)


