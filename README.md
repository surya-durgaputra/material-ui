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