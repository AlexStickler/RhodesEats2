import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, AppRegistry } from 'react-native';

export default class HomeText extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
        Decide to drive by clicking the 'Go Eat' button, or look for drivers by clicking 'Find Drivers' button
        </Text>
        <Image style={styles.logo} source={require("../assets/img_19587.png")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#8E8E8E',
  },
  logo: {
    backgroundColor: 'transparent',
    height: 128,
    width: 128,
  }
});


AppRegistry.registerComponent('HomeText', () => HomeText);