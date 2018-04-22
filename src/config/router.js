import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from '../screens/Feed';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';
import Register from '../screens/Register';
import Login from '../screens/Login';
import AboutMe from '../screens/AboutMe';
import Home from '../screens/Home';
import DriverStep1 from '../screens/DriverStep1';
import DriverStep2 from '../screens/DriverStep2';
import DriverStep3 from '../screens/DriverStep3';
import DriverReq from '../screens/DriverReq';
import ReqReq from '../screens/ReqReq';
import RequesterStep1 from '../screens/RequesterStep1';

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
});

export const Tabs = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});


export const RegStack = StackNavigator({
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Register',
    },
  },
 AboutMe: {
    screen: AboutMe,
    navigationOptions: {
      title: 'About Me',
    },
  },
});

export const RegorLog = StackNavigator({
  RegStack:{
    screen: RegStack,
  },
  Login:{
    screen: Login,
    navigationOptions:{
      tabBarLabel: 'Login',
    },
  },
});


/*export const DriverStack = StackNavigator({
  DriverReq: {
    screen: DriverReq,
  },
  DriverStep1: {
    screen: DriverStep1,
  },
  DriverStep2: {
    screen: DriverStep2,
  },
  DriverStep3: {
    screen: DriverStep3,
  },
})

export const ReqStack = StackNavigator({
  ReqReq: {
    screen: ReqReq,
  },
  RequesterStep1: {
    screen: RequesterStep1,
  },
})*/

export const Root = StackNavigator({
  RegorLog:{
    screen: RegorLog,
  },
  Home: {
    screen: Home,
  },
  DriverReq: {
    screen: DriverReq,
  },
  DriverStep1: {
    screen: DriverStep1,
  },
  DriverStep2: {
    screen: DriverStep2,
  },
  DriverStep3: {
    screen: DriverStep3,
  },
 /* ReqReq: {
    screen: ReqReq,
  },*/
  RequesterStep1: {
    screen: RequesterStep1,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});