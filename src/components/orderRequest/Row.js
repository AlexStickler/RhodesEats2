import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
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


const Row = (props) => (
  <View style={styles.container}>
    <Image source={{ uri: props.photo}} style={styles.photo} />
    <Text style={styles.text}>
      {`${props.name}`}
    </Text>
    <Text style={styles.textSmall}>
      {`${props.phone}`}
    </Text>
    /*<TouchableHighlight onPress={console.log("what up")}>
          <Image style={styles.listItemAction} source={{uri: 'https://www.icon2s.com/img256/256x256-valentine-red-heart.png'}} />
        </TouchableHighlight>*/
  </View>
);

export default Row;