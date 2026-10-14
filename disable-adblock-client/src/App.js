import { useState } from 'react';

const endpoint = 'http://192.168.1.94:5555';

const durations = [
  { label: '30 seconds', seconds: 30 },
  { label: '1 minute', seconds: 60 },
  { label: '5 minutes', seconds: 300 },
  { label: '1 hour', seconds: 3600 },
];

function App() {
  // status: null | { type: 'loading' | 'success' | 'error', message }
  const [status, setStatus] = useState(null);

  const disable = async ({ label, seconds }) => {
    setStatus({ type: 'loading' });
    try {
      const data = await callBackendAPI(seconds);
      const until = new Date(data.until).toLocaleTimeString();
      setStatus({
        type: 'success',
        message: `Adblock disabled for ${label} (until ${until})`,
      });
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    }
  };

  return (
    <section className='hero is-primary is-fullheight'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns is-centered'>
            <div className='column is-5-tablet is-4-desktop is-3-widescreen'>
              <div className='box'>
                <h1 className='title has-text-black has-text-centered'>
                  Disable adblock
                </h1>
                <div className='buttons are-large'>
                  {durations.map((duration) => (
                    <button
                      key={duration.seconds}
                      type='button'
                      className={`button is-fullwidth ${
                        status?.type === 'loading' ? 'is-loading' : ''
                      }`}
                      disabled={status?.type === 'loading'}
                      onClick={() => disable(duration)}
                    >
                      {duration.label}
                    </button>
                  ))}
                </div>
                {status && status.type !== 'loading' && (
                  <div
                    className={`notification ${
                      status.type === 'success' ? 'is-success' : 'is-danger'
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// calls the GET route on the Express server, throws if pihole didn't disable
const callBackendAPI = async (seconds) => {
  let res;
  try {
    res = await fetch(`${endpoint}/?seconds=${seconds}`);
  } catch {
    throw new Error(`Couldn't reach the server at ${endpoint}`);
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.ok) {
    throw new Error(data.error || `Server returned ${res.status}`);
  }
  return data;
};

export default App;
