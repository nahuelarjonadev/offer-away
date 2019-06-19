import React from "react";

class GoogleAuth extends React.Component {
  constructor() {
    super();
    this.state = { isSignedIn: null };

  }
  // using component level state to display auth status for testing.
  componentDidMount() {
    // async operation
    window.gapi.load("client:auth2", () => {
      console.log(`GAPI loaded.`);
      window.gapi.client
        .init({
          // init returns a promise.
          clientId:
            "271880838092-k0fhbs7k74hn35koiuapl0akipms2oi8.apps.googleusercontent.com",
          scope: "profile email"
        })
        .then(() => {
          // executes when gapi library loaded
          this.auth = window.gapi.auth2.getAuthInstance();
          // returns a boolean value to state
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>sign in: null</div>;
    } else if (this.state.isSignedIn) {
      return <div>sign in: true</div>;
    } else {
      return <div>sign in: false</div>;
    }
  }

  render() {
    return (
      <div>
        <h2>Google Auth Status:</h2>
        <div>
            {this.renderAuthButton()}
        </div>
      </div>
    );
  }
}

export default GoogleAuth;
