import React, { Component } from 'react';
import { Alert, View, ListView, StyleSheet, Text, TouchableHighlight, Image, Modal, TextInput, ScrollView} from 'react-native';
import * as firebase from 'firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  
  text: {
    marginLeft: 12,
    fontSize: 16,
    
  },
  textSmall: {
    marginLeft: 12,
    fontSize: 12,
    color: '#b8b2b2'
    
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  listItemAction: {
    //flex: 1,
    marginLeft: 25,
    width: 26,
    height: 25
  },
});

class AboutMe extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      location: '',
      phone:'',
      name:'',
      email:'',
      username:'',
    };
    
    this.itemsRef = this.getRef().child('users'); //items here refers to the items collection
  }

  getRef(){
    return firebase.database().ref();
  }
  
 render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text>TELL US ABOUT YOURSELF</Text>
        
        <TextInput
          value={this.state.name}
          placeholder = "NAME"
          onChangeText = {(value) => this.setState({name:value})}
          />
       
        <TextInput
          value1={this.state.phone}
          placeholder = "PHONE"
          onChangeText = {(value1) => this.setState({phone:value1})}
          />
        
        <TextInput
          value2={this.state.location}
          placeholder = "LOCATION"
          onChangeText = {(value2) => this.setState({location:value2})}
          />
                  
        <TextInput
          value3={this.state.email}
          placeholder = "EMAIL"
          onChangeText = {(value3) => this.setState({email:value3})}
          />
        
        <TextInput
          value4={this.state.username}
          placeholder = "USERNAME"
          onChangeText = {(value4) => this.setState({username:value4})}
          />

        <TouchableHighlight onPress={() => {
        if (!this.itemsRef.child(this.state.username)){
          Alert.alert('This username already exists');
        }
        else{
        
        this.itemsRef.child(this.state.username).set({name: this.state.name, phone: this.state.phone, location: this.state.location, email:this.state.email}); 
        }
        this.props.navigation.navigate('Home', {username: this.state.username});}}>
        <Text>Make My Profile!</Text>
        </TouchableHighlight>
      </View>
      </ScrollView>
    );
  }
}

export default AboutMe;