Release Notes
1. Job descriptions may be too long for displaying on table, minor issue
2. 

Installation and Running Instructions
1. Clone project from GitHub URL.
2. cd into project folder
3. run npm install to install project dependencies
4. run npm start to start up the project in localhost
5. (Optional) Run npm test to see test results/test suites
6. (Optional) Refer to development guide in report if you need help installing tools like npm, node, etc.

Change Log
1. 

GitHub URL
https://github.com/rmit-s3560494-gerald-lim/jobsage

Deployed Project URL
http://jobsage.appspot.com/

Credentials for deploying and running the product
1. Visit cloud.google.com
2. Login with credentials:
	Email: 		s3560494@student.rmit.edu.au
	Password:	Welcome5
3. Visit console, click on hamburger menu in the top right, followed by "Compute Engine" and then "VM Instances"
4. There should only be one instance in this section, click on the "SSH" button on the right side. This will launch a console connected to the backend server where you can see our server sided files.
5. Due to an issue with another account, we need to run cd ../s3588773 to see our most recent files.
6. To run the server with console output, run node server.js
7. To run the server constantly, run forever start server.js OR forever restart server.js