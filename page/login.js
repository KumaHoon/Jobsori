import React, {Component, 킴useEffect, useState} from 'react';
import LoginScreen, {SocialButton} from 'react-native-login-screen';
import {View, StyleSheet} from 'react-native';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginScreen
          logoImageSource={require('../assets/bank.png')}
          onLoginPress={() => {}}
          onSignupPress={() => {}}
          onEmailChange={(email: string) => {}}
          onPasswordChange={(password: string) => {}}>
          <SocialButton text="Continue with Google" onPress={() => {}} />
          <SocialButton
            text="Continue with Facebook"
            imageSource={require('../assets/social/facebook.png')}
            onPress={() => {}}
          />
          <SocialButton
            text="Continue with Twitter"
            imageSource={require('../assets/social/twitter.png')}
            onPress={() => {}}
          />
        </LoginScreen>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
