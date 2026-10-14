const express = require('express');
const app = express();
const PORT = 5555;
const { execFile } = require('child_process');

const MAX_SECONDS = 24 * 60 * 60;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// let the React client (served from a different port) read our responses
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  const seconds = parseDuration(req.query);
  if (seconds === null) {
    return res
      .status(400)
      .json({ ok: false, error: `duration must be 1-${MAX_SECONDS} seconds` });
  }

  // execFile runs pihole directly (no shell), so the argument can't inject commands
  execFile('pihole', ['disable', `${seconds}s`], (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return res.status(500).json({ ok: false, error: stderr || error.message });
    }
    console.log(`pihole disable ${seconds}s`);
    res.json({ ok: true, seconds, until: Date.now() + seconds * 1000 });
  });
});

// accepts ?seconds=N or ?minutes=N, returns whole seconds or null if invalid
const parseDuration = (query) => {
  let seconds;
  if (/^\d+$/.test(query.seconds)) {
    seconds = Number(query.seconds);
  } else if (/^\d+$/.test(query.minutes)) {
    seconds = Number(query.minutes) * 60;
  } else {
    return null;
  }
  return seconds >= 1 && seconds <= MAX_SECONDS ? seconds : null;
};

app.listen(PORT, () => {
  console.log(`🌎 🌎 App listening on port ${PORT} 🌎 🌎`);
});
