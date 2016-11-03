# Steps

1. If you haven't already, create your Github account.
2. Go to the Paprika private repo.
3. Click __Clone or download__, copy the SSH link.
4. In your terminal, navigate to the directory you want to keep your Paprika directory (and the rest of your dev code).
5. `git clone ssh@key`
6. `git checkout -b your_name`
7. You've just created a new branch, copied it from master, and moved into that branch, all at the same time!
8. Now we are going to our newly created branch to the remote repo
   1. `git add .`
   2. `git commit -m "my first commit"`
   3. `git push origin your_name_branch`
9. Let's add a new file and push that up!
   1. `mkdir first_dir`
   2. `cd first_dir`
   3. `touch script.js`
   4. `echo "console.log("hello")" >> script.js `
   5. `cat script.js`
10. Now let's push this file up to our __remote__ repo!
    1. `git add .`
    2. `git commit -m "added script.js"`
    3. `git push origin your_name_branch`
    4. Now let's check github!

