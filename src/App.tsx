import React from 'react';
import { Container } from 'reactstrap';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import './App.css';
import { Component } from 'react';
import { Navbar, Footer } from './shared';
import AppRouter from './router';

class App extends Component {
  render() {
    const responseFacebook = (response: any) =>{
      console.log(response)
    }

    const responseGoogle = (response: any) =>{
      console.log(response)
    }

  return (
    <Container>

      <Navbar />
      <AppRouter />
        <h2>Login with Facebook</h2>

        <FacebookLogin
        appId="325141648973972"
        fields="name, email, picture"
        callback = {responseFacebook}
        />
        <br />
        <h2>Login with Google</h2>

        <GoogleLogin
        clientId='928384234536-amsaflh986omt36rgkrcjvgq9b7qi8kv.apps.googleusercontent.com'
        buttonText='LOGIN WITH GOOGLE'
        onSuccess={responseGoogle}
        onFailure={responseGoogle} />
      <Footer />
    </Container>
  );
  }
}

export default App;
