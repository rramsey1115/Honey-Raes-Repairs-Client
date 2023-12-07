# Honey Rae Client
This repo is the starting code for the Honey Rae's API explorer chapter in the NSS .NET curriculum. 

## Setup
1. Use this template to create a new repo in your own account, and clone the new repo locally. 
1. Run `npm install` to get all of the project dependencies.
1. This client assumes that the .NET API is running locally on port `7075` for HTTPS. It is likely that your own API is using a different port. To use your app's port, edit `package.json` in this repo so that the value of the `proxy` property near the top of the file reflects the port your API is using.   
1. Then run `npm start` to start the application.  