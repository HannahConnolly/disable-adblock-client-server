console.log('test');
const express = require('express');
const app = express();
const fs = require('fs');
const PORT = 5555;
const { exec } = require('child_process');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  exec(buildDisableString(req), (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    return;
  });
  console.log(req.query);
  res.status(200);
  res.send('recieved..');
});

buildDisableString = (req) => {
  if (req.hasOwnProperty('seconds')) {
    console.log(`pihole disable ${req.seconds}s`);
    return `pihole disable ${req.seconds}s`;
  } else {
    console.log(`pihole disable ${req.minutes}m`);
    return `pihole disable ${req.minutes}m`;
  }
};

app.listen(PORT, () => {
  console.log(`🌎 🌎 App listening on port ${PORT} 🌎 🌎`);
});
