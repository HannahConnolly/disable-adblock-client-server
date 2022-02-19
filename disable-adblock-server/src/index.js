console.log('test');
const express = require('express');
const app = express();
const fs = require('fs');
const PORT = 5555;
const { exec } = require('child_process');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  exec(buildDisableString(req.query), (error, stdout, stderr) => {
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

app.get('/status', (req, res) => {
  console.log('checking status...')
  exec('pihole status', (error, stdout, stderr) => {
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



buildDisableString = (input) => {
  if (input.hasOwnProperty('seconds')) {
    console.log(`pihole disable ${input.seconds}s`);
    return `pihole disable ${input.seconds}s`;
  } else {
    console.log(`pihole disable ${input.minutes}m`);
    return `pihole disable ${input.minutes}m`;
  }
};

app.listen(PORT, () => {
  console.log(`🌎 🌎 App listening on port ${PORT} 🌎 🌎`);
});
