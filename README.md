# Followed Chris steps given his pull request
1.  Added global user name
2.  Added global email address
3.  Added proxy
	* git config --global https.proxy https://localhost:port
	* git config --global http.proxy http://USER:PASS@localhost:port
4.  Clone the testapp repo https://github.com/ctsanon/testapp.git
5.  Created new branch (govind-branch-local) locally 
6.  Updated this Read me file
7.  Commit the changes.
8.  Push to local branch to server (git push origin govind-local-branch:govind-server-branch)

## Squash
1.  git rebase -i HEAD~4
2.  Updated squash command
3.  Added new commit message
4.  Pull request to update the local branch with remote one
5.  Push the rebase changes to remote branch 