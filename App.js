/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Home from './page/Home';
import Login from './page/Login';
import Profile from './page/Profile';
import ContentLanding from './page/ContentLanding';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Chatting from './page/Chatting';
import MainLanding from './page/MainLanding';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="MainLanding" component={MainLanding} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="ContentLanding" component={ContentLanding} />
          <Stack.Screen name="Chatting" component={Chatting} />
        </Stack.Navigator>
      </NavigationContainer>
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
