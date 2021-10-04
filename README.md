Set git config in local and global. with ExhiByte Credential
git config --global user.name harshadexabite
git config --global user.email harshad05.exhibyte@gmail.com


Initialize git into local and clone the created repository 
git init
git clone https://github.com/harshadexhibyte/ExhibyteTask.git


Create develop  branch in local
git branch -M develop


Create .gitignore file and README.md file into project.
touch README.md
touch .gitignore


Add the both file into git
git add README.md || git add --a


Commit the added file
git commit -m "Two File 1.README 2.gitignore"


Push the commit
git push -u origin develop




Explain use of both file into  README.md file
1)README.md: in this file used to place instruction of the following projects
2).gitignore: this file used to ignore(skip) the file , & in in this file give path Foldername/Filname git ignored listing file in this file like Database ,*.db ...


git config: set config (user name , email)               -->git config --global user.email harshad05.exhibyte@gmail.com
git init : initilize the .git folder (hidden)           
git clone : clone Repository from git hub                --> git clone URL 
git add : add file to git folder  (staging area)         --> git add filename| git add -A
git commit : final save the code                         --> git commit -m "some Massage"
git diff : compare working directory to the staging area
git reset : used to undo local change 
git status : track file                                  
git rm : remove the file
git log : displays a record of the commits git repository-->git log -p -2 (Display 2 record)
git show :
git tag : Create the tag 
git branch :show branche alredy exist 
git checkout : Change(switched) the Branch 
git merge : merge the branches and files  
git remote :show the origin (git remote -v to show the URL of fetch and push)
git push : push (uploded) code to the github 
git pull : Downloded File from remote repository 
git stash :temporaty stored the changes , working copy you can work on somethings else



