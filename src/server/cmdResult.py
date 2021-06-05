# importing libraries
import subprocess
import os
import json

# a function to list the files in
# the current directory and
# parse the output.
def list_command(cmd):

	# the ls command
	# cmd = 'curl'

	temp = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE)

	output = temp.stdout.read().decode("utf-8").splitlines()

	#output = temp.stdout.read().splitlines()
	print(output)
	print(type(output))
	#output = json.dumps(output)
	#print(output)
	#print(type(output))

	#output = str(temp.communicate())
	#print(output)

	#output = output.replace('\\n', '')
	#print(output)

	#output = output.replace('\\t', '')
	#output = output.replace('\\r', '')
	#output = output.replace('\', None', '')
	#output = output.split("\\n")

	#res = []

	#for line in output:
	#	res.append(line)

	#for i in range(1, len(res) - 1):
	#	print(res[i])

	#print(json.dumps(res))

	return output

if __name__ == '__main__':
	#list_command(["curl -o /dev/null -w \"Remote IP: %{remote_ip} Connect: %{time_connect} TTFB: %{time_starttransfer} Total time: %{time_total} Download speed: %{speed_download} \n\" www.naver.com"])
	list_command(["dig google.com"])
