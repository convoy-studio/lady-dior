import re
import os, os.path, sys, shutil, time, subprocess
from subprocess import call

rootPath = sys.argv[1]
jsRelPath = 'src/js'
jsFilesPath = rootPath + "/" + jsRelPath
allPathStr = "{"

# JS
for root, dirs, files in os.walk(jsFilesPath):
    for file in files:
        if file.endswith(".js"):
            path = root.replace(rootPath, "")
            filename = file.replace(".js", "")
            fPath = "." + path + "/" + filename
            str = '"' + filename + '": "' + fPath + '",'
            allPathStr += str

allPathStr = allPathStr[:-1]
allPathStr += "}"
print allPathStr
