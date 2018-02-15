import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.instagramOAuth = this.instagramOAuth.bind(this);
  }

  instagramOAuth() {
    fetch('https://api.instagram.com/oauth/authorize/?client_id=df0f827f058d4944b1ddc3eb28d73902&redirect_uri=https://lookhop.herokuapp.com/login/callback&response_type=code')
      .then(() => console.log('Instagram oauth started'))
      .catch(err => console.error('Error starting instagram oauth', err));
  }

  render() {
    return (
      <div>
        <h1>Lookhop</h1>
        <button onClick={this.instagramOAuth}>Login with Instagram</button>
      </div>
    );
  }
}

export default App;