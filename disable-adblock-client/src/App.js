const endpoint = 'http://192.168.1.94:5555';

function App() {
  return (
    <section className='hero is-primary is-fullheight'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns is-centered'>
            <div className='column is-5-tablet is-4-desktop is-3-widescreen'>
              <form action='' className='box'>
                <h1 className='title has-text-black has-text-centered'>
                  Disable adblock
                </h1>
                <div className='buttons are-large'>
                  <button
                    className='button is-fullwidth'
                    onClick={() => {
                      callBackendAPI(30, 'seconds');
                    }}
                  >
                    30 seconds
                  </button>
                  <button
                    className='button is-fullwidth'
                    onClick={() => {
                      callBackendAPI(60, 'seconds');
                    }}
                  >
                    1 minute
                  </button>
                  <button
                    className='button is-fullwidth'
                    onClick={() => {
                      callBackendAPI(300, 'seconds');
                    }}
                  >
                    5 minutes
                  </button>
                  <button
                    className='button is-fullwidth'
                    onClick={() => {
                      callBackendAPI(60, 'minutes');
                    }}
                  >
                    1 hour
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// fetching the GET route from the Express server which matches the GET route from server.js
const callBackendAPI = async (amount, type) => {
  await fetch(`${endpoint}/?${type}=${amount}`, {
    headers: new Headers({}),
  });
};

export default App;
