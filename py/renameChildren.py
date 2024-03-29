import sys, getopt, os

def main(argv):
	folderPath = sys.argv[1]
	preName = ""
	blueColor = '\033[94m'
	finishedColor = '\033[93m'
	endColor = '\033[0m'
	if len(sys.argv) > 2 :
		preName = sys.argv[2]
	index = 0
	for root, dirs, files in os.walk(folderPath):
	    for file in files:
	    	if not file.startswith('.'):
	    		ext = file.split(".")[1]
	    		oldName = root + "/" + file
	    		newName = root + "/" + preName + str(index) + "." + ext
	    		os.rename(oldName, newName)
	    		index+=1

	print finishedColor + "process finished" + endColor

if __name__ == "__main__":
	main(sys.argv[1:])
