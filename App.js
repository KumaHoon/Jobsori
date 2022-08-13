/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, Image, View, Button} from 'react-native';
import LoginScreen, {SocialButton} from "react-native-login-screen";


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginScreen
          logoImageSource={require('./assets/bank.png')}
          onLoginPress={() => {}}
          onSignupPress={() => {}}
          onEmailChange={(email: string) => {}}
          onPasswordChange={(password: string) => {}}>
          <SocialButton text="Continue with Google" onPress={() => {}} />
          <SocialButton
            text="Continue with Facebook"
            imageSource={require('./assets/social/facebook.png')}
            onPress={() => {}}
          />
          <SocialButton
            text="Continue with Twitter"
            imageSource={require('./assets/social/twitter.png')}
            onPress={() => {}}
          />
        </LoginScreen>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  hello: {
    fontSize: 30,
    color: 'red',
  },
});

export default App;
