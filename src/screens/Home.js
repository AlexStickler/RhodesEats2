import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeText from '../DesignComponents/HomeText';
import AddButton from '../DesignComponents/AddButton';
import { Card } from 'react-native-elements'; // Version can be specified in package.json

class Home extends Component {

  
  render() {
    console.log(this.props.navigation.state.params.username);
    const username = this.props.navigation.state.params.username;
    console.log(username);
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Welcome to Crave It, {this.props.navigation.state.params.username}!
        </Text>
        <Card title="First Time? No worries!">
          <HomeText />
        </Card>
        <AddButton onPress={() => this.props.navigation.navigate('DriverReq', {username: username})} title="Go Eat!" />
        
        <AddButton onPress={() => this.props.navigation.navigate('RequesterStep1', {username: username})} title="Find Drivers!" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#E1D7D8',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7F7D7D',
  },
});

export default Home;