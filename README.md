# Steps to deploy the server on the AWS EC2 instance

## Lunch EC2 instance 
On Lunching setup all the required configuration as per your needs.

## Connect the EC2 instance by any means you want. Better to go with the EC2 CLI.

### Install NodeJS and NPM using nvm
#### Install NVM using the given command
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`

#### Activate nvm by typing the following at the command line.
`. ~/.nvm/nvm.sh`
#### Now install NodeJS on EC2
`nvm install node`

### Install Git and clone repository from GitHub
#### Installing Git
`udo yum update -y`
`sudo yum install git -y`
#### Cloning git repository
`git clone your-github-repository-clone-link`

### Install dependencies
First move to the directory where you have cloned the repository [cd directory-name]

#### Run the command to install all the dependencies for the project
`npm install`

### Run the application
`node index.js`
or `node app.js`
whichever is your entry file.

### Configure security group to access via public URL as per your need
