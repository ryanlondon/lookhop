import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.instagramOAuth = this.instagramOAuth.bind(this);
  }

  instagramOAuth() {
    fetch('/login/instagram')
      .then(() => console.log('Instagram callback'));
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