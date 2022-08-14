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
import MyProfile from './page/MyProfile';
import ContentLanding from './page/ContentLanding';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Chatting from './page/Chatting';
import MainLanding from './page/MainLanding';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="MainLanding" component={MainLanding} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Profile" component={MyProfile} />
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
