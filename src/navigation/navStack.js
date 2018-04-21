//react imports
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

//imports
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Icon } from 'native-base'

//stack
import landing from '../components/appLoginNavigator/landing'
import login from '../components/appLoginNavigator/login'
import signup from '../components/appLoginNavigator/signup'
import about from '../components/appLoginNavigator/about'
import browse from '../components/appTabNavigator/browse'
import home from '../components/appTabNavigator/home'
import orders from '../components/appTabNavigator/orders'

class navStack extends Component {
    render() {
        return (
            <navStack />
        );
    }
}

export const Tabs = TabNavigator({
    browse: {
        screen: browse
    },
    home: {
        screen: home
    },
    orders: {
        screen: orders
    }
});

const Navigator = StackNavigator({
    landing: {
        screen: landing
    },
    signup: {
        screen: signup
    },
    login: {
        screen: login
    },
    about: {
        screen: about
    },
    tabs: {
        screen: Tabs
    }
});

export default Navigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});