import os
from os.path import basename
__name__ = "scripts"
files = [f for f in os.listdir('./scripts/')]

pyFiles = []
for file in files:
    if "." in file:
        if file.split(".")[1] == "py" and file != "__init__.py":
            pyFiles.append(file.split(".")[0])
        

__all__ = [basename(f) for f in pyFiles]
