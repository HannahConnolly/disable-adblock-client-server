// import { useState } from 'react';

const endpoint = 'http://192.168.1.94:5555';

function App() {
  // const [button30, setbutton30] = useState['off'];
  // console.log(button30);
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
                  {renderButton(30, 'seconds', '30 seconds')}
                  {renderButton(60, 'seconds', '60 seconds')}
                  {renderButton(300, 'seconds', '5 minutes')}
                  {renderButton(60, 'minutes', '1 hour')}
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
  try {
    await fetch(`${endpoint}/?${type}=${amount}`, {
      headers: new Headers({}),
    });
  } catch (e) {
    console.log(e);
  }
};

const renderButton = (amount, unit, description) => {
  return (
    <button
      className='button is-fullwidth'
      onClick={(e) => {
        e.preventDefault();
        callBackendAPI(amount, unit);
      }}
    >
      {description}
    </button>
  );
};

export default App;
