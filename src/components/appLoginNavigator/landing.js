import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    Image,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native'

class landing extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior = { "padding" } 
            style = { styles.keyboardwrapper }>

                <ImageBackground source = { require('../img/food.jpg')}
                style = { styles.container }>

                    <View style={styles.logocontainer}>
                        <Image source = { require('../img/logo.png')}
                        style = { styles.logo } />
                        
                        <View style={styles.loginformcontainer}>

                            <TouchableOpacity style={styles.loginbtn}>
                                <Button
                                title="LOGIN"
                                onPress={() => this.props.navigation.navigate('login')}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.registerbtn}>
                                <Button
                                title="SIGN UP"
                                onPress={() => this.props.navigation.navigate('signup')}
                                />
                            </TouchableOpacity>

                        </View>

                    </View>

                </ImageBackground>

            </KeyboardAvoidingView>
        );
    }
}

export default landing;

const styles = StyleSheet.create({
keyboardwrapper: {
   flex: 1,
   justifyContent: 'center',
   alignSelf: 'stretch',
   width: null,
   marginTop: 5,
},
loginformcontainer: {
    alignItems: 'center',
  },
container: {
   flex: 1,
   justifyContent: 'center',
   alignSelf: 'stretch',
   width: null,
   padding: 5,
},
logocontainer: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
},
logo: {
   width: 230,
   height: 140,
},
loginbtn: {
    backgroundColor: '#ecf0f1',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    marginTop: 50,
  },
registerbtn: {
    backgroundColor: '#bdc3c7',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    marginTop: 5,
  },
textinput: {
    color: 'black',
    alignSelf: 'stretch',
    padding: 12,
    marginBottom: 5,
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
  }
});