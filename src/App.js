import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Navigator from './navigation/navStack'

export default class app extends React.Component {
  render() {
    return (
      <Navigator />
    );
  }
}

const AppStackNavigator = StackNavigator(
  {
    Test: {
      screen: Navigator
    }
  },
  {
    initialRouteName: 'Test',
  }
);

const styles = StyleSheet.create(
  {
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
  }
);