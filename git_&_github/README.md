#Git & Github!!

Git is a CLI **(command line interface)** that we use for version control. 

Mastering git is all about knowing the basic commands and understanding what they do.

##Adding

Commit everything in the directory that you have worked on.

`git add -A :/`

OR 

`git add .`

The add command add your changes to the staging phase. This means they are ready to be committed

##Committing

`git commit -m "added new JS modules, need styling"`

Committing puts commits the changes in your LOCAL repo

Pushing is what actually sends your code to github.

`git push origin master`

**origin** is the remote, this is basically your link to github. It tells your computer to push your changes to origin, which would be the link to your remote repo on github. 

**master** is the branch.  More on branches later....

You can use `git push -u <remote_name> <local_branch_name>` to set the default upstream. See the documentation for git push for more details.

`git pull origin master` - this pulls code from the remote repo that is located at "origin".


##Branches

One of the most powerful and useful parts of git is its branches.  These are basically different copies of your code. So you can work on one branch, and not affect the other branch.

Be careful with working with branches though, this is where you will run into a lot of commit issues.  It is important to understand how git works so that you can avoid these situations as much as possible.

#####To make a new branch:

`git checkout -b <my_new_branch>`

######To switch between branches

`git checkout <branch_i_want>`

#####To check your branches, and to see which one you are on:

`git branch`

You should always have one "master" branch. Usually, people just name this master. But you can name it whatever you want.

Also remember that besides it being the master branch, there is nothing special about it.  You can delete it just as you can delete any other branch.

To change the default branch on github, go to the repo on github.com, then Settings --> Branches --> Default branch

#####To delete a local branch:

`git checkout -d <branch_to_delete>`

You may also need the `-f` flag if you have unmerged changes. It may also prompt you to use the `-D`. 

`git checkout -b <my_new_branch> origin/master`--> will create the new branch and automatically have it set to pull from master

##Merging

To merge, go into the branch you want to merge the other branch into, usually master...

`git checkout master`

`git merge <other_branch>`

Your changes will now be merged into the master branch!



##Other Useful commands

`git remote -v` --> check where the remote for your git repo is.

`git push origin --delete <branch_name>` --> delete a REMOTE branch

`git clone -b <branch> <remote_repo>` --> clone a remote branch to your local computer. This is what you use if you want to copy code from github onto your computer.







