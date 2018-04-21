import React, {Component} from 'react';
import{
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableHighlight,
} from 'react-native';

const constants = {
  actionColor: '#3cb371'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  action: {
    borderColor: 'transparent',
    borderwidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
    button: {
    borderColor: '#8E8E8E',
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  text: {
    color: '#8E8E8E',
    justifyContent:'center'
  },
});



export default class AddButton extends Component {
  
  render(){
    return(
      <View style={styles.action}>
      <TouchableHighlight style={styles.button}
        underlayColor = '#24ce84'
        onPress={this.props.onPress}>
        
        <Text style={styles.text}> {this.props.title} </Text>
        
      </TouchableHighlight>
      </View>
          
      );
  }
  
}

AppRegistry.registerComponent('AddButton', () => AddButton);