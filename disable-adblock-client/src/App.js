const endpoint = 'http://192.168.1.94:5555';

function App() {
  return (
    <div className='has-background-light' style={{ height: '2000px' }}>
      <div className='columns'>
        <div className='column' />
        <div className='column' style={{ alignItems: 'center' }}>
          <div style={{ marginTop: '200px' }} />
          <h1 className='title has-text-centered'>Disable adlbocker</h1>
          <div className='buttons'>
            <button
              className='button fa-align-center'
              onClick={() => {
                callBackendAPI(30, 'seconds');
              }}
            >
              30 seconds
            </button>
            <button
              className='button fa-align-center'
              onClick={() => {
                callBackendAPI(60, 'seconds');
              }}
            >
              1 minute
            </button>
            <button
              className='button fa-align-center'
              onClick={() => {
                callBackendAPI(300, 'seconds');
              }}
            >
              5 minutes
            </button>
            <button
              className='button fa-align-center'
              onClick={() => {
                callBackendAPI(60, 'minutes');
              }}
            >
              1 hour
            </button>
          </div>
        </div>
        <div className='column' />
      </div>
    </div>
  );
}

// function callDisabler(amount, type) {
//   console.log(endpoint);
//   callBackendAPI(amount, type);
// }

// fetching the GET route from the Express server which matches the GET route from server.js
const callBackendAPI = async (amount, type) => {
  console.log(`${endpoint}/?${type}=${amount}`);
  await fetch(`${endpoint}/?${type}=${amount}`, {
    headers: new Headers({}),
  });
};

export default App;
