import React, { Component } from 'react';
import { View, Text, Button, ScrollView, Image } from 'react-native';
//import firebase from 'firebase';
import { TitledInput } from './TitledInput';
import * as firebase from 'firebase';


class Login extends Component {
   state = { email: '', password: '', error: '', loading: false };
  
  onLogin = () => {
  const { email, password } = this.state;
  firebase.auth().signInWithEmailAndPassword(email, password)
    /*.then((user) => {
      // If you need to do anything with the user, do it here
      // The user will be logged in automatically by the
      // `onAuthStateChanged` listener we set up in App.js earlier
      this.props.navigation.navigate('Home');
    })*/
    .catch(() => {
                        this.setState({ error: 'Authentication failed.', loading: false });
                    });
                    
    this.props.navigation.navigate('Tabs');
}

    renderButtonOrSpinner() {
        if (this.state.loading) {
            return <Text>Loading</Text>;    
        }
        return <Button onPress={this.onLogin.bind(this)} title="Login" />;
    }
    render() {
        return (
          <ScrollView style={styles.scroll}>
            <View>
              <Image style={styles.logo} source={require("../assets/login.png")}/>
                    <TitledInput 
                        label='Email Address'
                        placeholder='you@domain.com'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                    <TitledInput 
                        label='Password'
                        autoCorrect={false}
                        placeholder='*******'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                    <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                    {this.renderButtonOrSpinner()}
            </View>
            </ScrollView>
        );
    }
}
const styles = {
    errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
  scroll: {
    backgroundColor: '#E1D7D8',
    padding: 30,
    flexDirection: 'column'
    
},
  logo: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    height: 120,
    width: '100%',
    padding: 10,
   flex: 1
  }
};

export default Login;