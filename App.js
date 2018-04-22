import React, { Component } from 'react';
import { Root, Tabs } from './src/config/router';
import * as firebase from 'firebase';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyB_6H1FQlyz-MUcw3DmuZ_qY1ogb55C6g0",
      authDomain: "my-project-1496934618757.firebaseapp.com",
      databaseURL: "https://my-project-1496934618757.firebaseio.com",
      projectId: "my-project-1496934618757",
      storageBucket: "",
      messagingSenderId: "1097946980134"
    };
  
 if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
    }
    
  render() {
    return <Root />;
  }
}

export default App;