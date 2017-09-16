On initial commit:

echo "# material-ui" >> README.md

git init

git add README.md

git add .

git commit -m "first commit"

git remote add origin  https://github.com/surya-durgaputra/material-ui.git





On subsequent updates:

add everything to git: git add .

get status of what changed: git status

commit the changes locally: git commit -m "Tabs ar working. Changed Theme."

add+commit:git commit -am "Tabs ar working. Changed Theme."

push to github: git push -u origin master


Setup github to checkin from terminal without login everytime:

1)in terminal:

cd ~  #Your home directory

ssh-keygen -t rsa    #Press enter for all values

2)Associate the SSH key with the remote repository: 
This step varies, depending on how your remote is set up. 

If it is a GitHub repository and you have administrative privileges, go to settings and click 'add SSH key'. Copy the contents of your ~/.ssh/id_rsa.pub into the field labeled 'Key'.

If your repository is administered by somebody else, give the administrator your id_rsa.pub.

3)Set your remote URL to a form that supports SSH

If you have done the steps above and are still getting the password prompt, make sure your repo URL is in the form:

git+ssh://git@github.com/username/reponame.git

as opposed to:

https://github.com/username/reponame.git

To see your repo URL, run:

git remote show origin

You can change the URL with:

git remote set-url origin git+ssh://git@github.com/username/reponame.git

MISCELLANEOUS:

creating a new branch and switching to it(here material-ui-beta is the new branch name): git checkout -b material-ui-beta

pushing changes to this branch: git push origin material-ui-beta

switching to an already existing branch (here I am switching to master):  git checkout master

(Flow when craeting a new branch, merging changes there and then come back to original branch...we often do this if we dont want this code in the main branch):

(we are currently in master. We dont want to commit code changes to this branch)

(create the new branch and switch to it):git checkout -b material-ui-beta

(run status to see what changes are there to commit): git status

(run add to add all changes as well as untracked{newly added} files): git add .

(run status to see all the changes to be committed {they will now be all in green}): git status

(commit to the new branch we created above): git commit -am "my commit message"

(push changes to the new branch we created above): git push origin material-ui-beta

(now switch back to original branch..master in this case. This will automatically revert the code to the older branch): git checkout master

