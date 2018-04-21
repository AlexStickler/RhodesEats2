import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'
import Config from 'react-native-config';
import firebase from 'firebase';
import LoginForm from '../login/LoginForm';
import { StackNavigator } from 'react-navigation';

var config = {
    apiKey: "AIzaSyB_6H1FQlyz-MUcw3DmuZ_qY1ogb55C6g0",
    authDomain: "my-project-1496934618757.firebaseapp.com",
    databaseURL: "https://my-project-1496934618757.firebaseio.com",
    projectId: "my-project-1496934618757",
    storageBucket: "",
    messagingSenderId: "1097946980134"
  };

class login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LoginForm />
                <Button
                    title="Go to Tabs"
                    onPress={() => this.props.navigation.navigate('tabs')}
                />
            </View>
        );
    }
}

export default login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});