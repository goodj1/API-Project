<!-- Below are commands to install and run this project -->

install all dependencies : npm i
run app : node app.js
run test: npm run test

<!-- File Tree -->

../.git/ : contains git logs (version control commit history).
../__tests__/app.test.js : unit tests.
../app.js : code logic.
../package.json : contains all dependencies.

<!-- General Info-->
***This project makes a get request to multiple APIs and checks the url protocols;
if the url protocol is valid: the url, status code, contentLength and dateAndTime will be
printed in the console.

This project is compatible with node v14.18.0 or greater.
Line 55-60 can be commented out when running tests, to remove unnecessary logs in terminal.
