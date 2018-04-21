import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'
import Config from 'react-native-config';
import firebase from 'firebase';
import RegisterForm from '../signup/RegisterForm';
import { StackNavigator } from 'react-navigation';

var config = {
    apiKey: "AIzaSyB_6H1FQlyz-MUcw3DmuZ_qY1ogb55C6g0",
    authDomain: "my-project-1496934618757.firebaseapp.com",
    databaseURL: "https://my-project-1496934618757.firebaseio.com",
    projectId: "my-project-1496934618757",
    storageBucket: "",
    messagingSenderId: "1097946980134"
  };
  firebase.initializeApp(config);

class signup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <RegisterForm />
                <Button
                    title="Go to about"
                    onPress={() => this.props.navigation.navigate('about')}
                />
            </View>
        );
    }
}

export default signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});