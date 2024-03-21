require("dotenv").config()
const { exec } = require('child_process');
exec('npm i ts-node -g')
let ls = exec("npm start")

ls.stdout.on('data', function (data) {
  console.log('stdout: ' + data.toString());
});

ls.stderr.on('data', function (data) {
  console.log('stderr: ' + data.toString());
});

ls.on('exit', function (code) {
  console.log('child process exited with code ' + code);
});