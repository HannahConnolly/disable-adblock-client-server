console.log('test');
const express = require('express');
const app = express();
const fs = require('fs');
const PORT = 5555;
// const { exec } = require('child_process');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

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
  // getStatusFromConsole().then((status) => {
  //   console.log('output: ' + status);
  //   if (status.includes('Pi-hole blocking is enabled')) res.status(200);
  //   res.send(status);
  // });
  lsExample().then((status) => {
    console.log('output: ' + status);
  });
});

// async function getStatusFromConsole() {
//   let output;
//   await exec('pihole status', (error, stdout, stderr) => {
//     if (error) {
//       console.log(`error: ${error.message}`);
//       return;
//     }
//     if (stderr) {
//       console.log(`stderr: ${stderr}`);
//       return;
//     }
//     console.log(stdout);
//     output = stdout;
//   });
//   return output;
// }

async function lsExample() {
  let out = 'test';
  try {
    const { stdout, stderr } = await exec('pihole status');
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
    out = stdout;
  } catch (e) {
    console.error(e); // should contain code (exit code) and signal (that caused the termination).
  }
  return stdout;
}

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
