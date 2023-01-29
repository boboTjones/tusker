import React from 'react';
import './App.css';

import Button from 'react-bootstrap/Button';
import OauthApi from './api/OauthApi';

function Authorize() {
  var o = new OauthApi();
  o.basePath = 'https://infosec.exchange';
  o.apiClient.basePath = 'https://infosec.exchange';
  o.oauthAuthorizePOST((e) => {
    console.log(e)
  });
}

const handleClick = () => Authorize();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <Button variant="primary" size="lg" onClick={handleClick}>Authorize</Button>{' '}
        </p>
      </header>
    </div>
  );
}

export default App;
