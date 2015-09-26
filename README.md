# freeCodeCamp
Exercises from Free Code Camp for pair programming

## Installation && Basic Configuration 
If you haven't installed git yet, do that first:
https://git-scm.com/downloads


Configure your identity on your machine. Remember to use the quotes when setting your name.
```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```
*for more information:* 
http://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration 


Clone the repository using either SSH or HTTPS. This will create a folder
called freeCodeCamp in your working directory with a copy of all the files 
from the repo.

Use **SSH**
```
git clone git@github.com:teichopsia-/freeCodeCamp.git
```

Use **HTTPS**
```
git clone https://github.com/teichopsia-/freeCodeCamp.git
```
*for more information:* 
https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository



## How to write a Commit Message && Configuration
**Configuration**
http://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration#Basic-Client-Configuration

*Read this article*
http://chris.beams.io/posts/git-commit/#separate


## Contributing
https://help.github.com/articles/pushing-to-a-remote/

```
git push origin master
```

### TL;DR

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
git config --global core.edit youreditor
git config --global commit.template ~/.gitmessage.txt

git clone git@github.com:teichopsia-/freeCodeCamp.git

git add .
git commit 
git push origin master
```

