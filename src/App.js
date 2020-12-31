import logo from './logo.svg';
import './App.css';
import { JSO, Fetcher } from 'jso';

function getGame() {



  // When your application wants to access the protected data
  // let f = new Fetcher(client)
  // let url = 'https://fantasysports.yahooapis.com/fantasy/v2/game/nfl'
  // f.fetch(url, {})
  //   .then((data) => {
  //     return data.json()
  //   })
  //   .then((data) => {
  //     console.log("I got protected json data from the API", data)
  //   })
  //   .catch((err) => {
  //     console.error("Error from fetcher", err)
  //   });
}

function App() {
  let config = {
    providerID: "yahoo",
    client_id: "dj0yJmk9NVVVdTlhczFpOFRnJmQ9WVdrOWVGZHViRFowVTBVbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWEw",
    redirect_uri: "https://localhost:3000/", // The URL where you is redirected back, and where you perform run the callback() function.
    authorization: "https://api.login.yahoo.com/oauth2/request_auth",
    token: "https://api.login.yahoo.com/oauth2/get_token",
    debug: true,
    response_type: "code",
    scopes: { require: [ "fspt-r" ]}
  };
  let client = new JSO(config);

  client.callback();

    let f = new Fetcher(client)
    let url = 'https://fantasysports.yahooapis.com/fantasy/v2/game/nfl'
    f.fetch(url, {})
      .then((data) => {
        return data.json()
      })
      .then((data) => {
        console.log("I got protected json data from the API", data)
      })
      .catch((err) => {
        console.error("Error from fetcher", err)
      });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
