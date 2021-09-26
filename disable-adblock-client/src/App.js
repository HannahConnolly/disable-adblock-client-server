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
                <h1 className='subtitle has-text-black has-text-centered'>
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
                {/* <label for='' className='label'>
                    Email
                  </label>
                  <div className='control has-icons-left'>
                    <input
                      type='email'
                      placeholder='e.g. bobsmith@gmail.com'
                      className='input'
                      required
                    />
                    <span className='icon is-small is-left'>
                      <i className='fa fa-envelope'></i>
                    </span>
                  </div>
                </div>
                <div className='field'>
                  <label for='' className='label'>
                    Password
                  </label>
                  <div className='control has-icons-left'>
                    <input
                      type='password'
                      placeholder='*******'
                      className='input'
                      required
                    />
                    <span className='icon is-small is-left'>
                      <i className='fa fa-lock'></i>
                    </span>
                  </div>
                </div>
                <div className='field'>
                  <label for='' className='checkbox'>
                    <input type='checkbox' />
                    Remember me
                  </label> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// function App() {
//   return (
//     <div className='has-background-light' style={{ height: '2000px' }}>
//       <div className='columns'>
//         <div className='column' />
//         <div className='column' style={{ alignItems: 'center' }}>
//           <div style={{ marginTop: '200px' }} />
//           <h1 className='title has-text-centered'>Disable adlbocker</h1>
//           <div className='buttons'>
//             <button
//               className='button fa-align-center'
//               onClick={() => {
//                 callBackendAPI(30, 'seconds');
//               }}
//             >
//               30 seconds
//             </button>
//             <button
//               className='button fa-align-center'
//               onClick={() => {
//                 callBackendAPI(60, 'seconds');
//               }}
//             >
//               1 minute
//             </button>
//             <button
//               className='button fa-align-center'
//               onClick={() => {
//                 callBackendAPI(300, 'seconds');
//               }}
//             >
//               5 minutes
//             </button>
//             <button
//               className='button fa-align-center'
//               onClick={() => {
//                 callBackendAPI(60, 'minutes');
//               }}
//             >
//               1 hour
//             </button>
//           </div>
//         </div>
//         <div className='column' />
//       </div>
//     </div>
//   );
// }

// fetching the GET route from the Express server which matches the GET route from server.js
const callBackendAPI = async (amount, type) => {
  console.log(`${endpoint}/?${type}=${amount}`);
  await fetch(`${endpoint}/?${type}=${amount}`, {
    headers: new Headers({}),
  });
};

export default App;
