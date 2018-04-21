import React, { Component } from 'react';
import { Alert, View, ListView, StyleSheet, Text, TouchableHighlight, Image, Modal, TextInput} from 'react-native';
//import Row from './Row';
import SearchHeader from './SearchHeader';
import LoadMore from './LoadMore';
import AddButton from './AddButton';
import * as firebase from 'firebase';

 var config = {
    apiKey:  "AIzaSyArWukY7qddMtdFIxS6pFUnK7WisxIldj0",
    authDomain: "whyman-1e120.firebaseapp.com",
    databaseURL: "https://whyman-1e120.firebaseio.com",
    projectId: "whyman-1e120",
    storageBucket: "whyman-1e120.appspot.com",
  };
  
  const firebaseApp = firebase.initializeApp(config);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  rowContainer: {
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

class OrderReqDriver extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      //dataSource: ds.cloneWithRows(data),
      dataSource: ds,
      modalVisible: false,
      order: '',
      restaurant: '',
      phone:'',
      name:'',
    };
    
    this.itemsRef = this.getRef().child('profiles'); //items here refers to the items collection
  }
  
  setModalVisible(visible){
    this.setState({modalVisible:visible});
  }

  getRef(){
    return firebaseApp.database().ref();
  }
  
  componentWillMount(){
    this.getItems(this.itemsRef);
  }
  
  componentDidMount(){
    this.getItems(this.itemsRef);
  }
  
  getItems(itemsRef){
    //const items = [{title: 'Item One'}, {title: 'Item Two'}];
    
    itemsRef.on('value', (snap) => {
      let items = [];
      snap.forEach((child) => {
        items.push({
          name: child.val().name,
          phone: child.val().phone,
          order: child.val().order,
          _key: child.key,
          status: child.val().status,
          restaurant: child.val().restaurant,
        });
      });
      
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(items)
    });
    });
    
  }
  
pressRow = (item) =>{
  if (item.status == 'orders accepted'){
      Alert.alert('No going back: you have accepted a request');
  }
  else{
    Alert.alert('Your offer has been deleted!');
    this.itemsRef.child(item._key).remove();
    //console.log(item);
  }
}
  
renderRow = (item) =>{
    return (
      <TouchableHighlight underlayColor = '#008b8b' onPress={()=>{this.pressRow(item)}}>
        <View style={styles.rowContainer}>
        <Image source={{ uri: item.photo}} style={styles.photo} />
       <Text style={styles.text}>
           {(item.name)}
       </Text>
       <Text style={styles.textSmall}>
           {(item.phone)}
       </Text>
       <Text style={styles.textSmall}>
           {(item.order)}
       </Text>
        </View>
      </TouchableHighlight>
    );
  }
  
  addItem(){
    this.setModalVisible(true);
  }
  
 render() {
    return (
      <View style={styles.container}>
      <Modal 
        animationType={"slide"}
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {}}>
        <View style={{marginTop: 22}}>
        <View>
        
        <Text>REQUEST ORDER</Text>
        
        <TextInput
          value={this.state.name}
          placeholder = "NAME"
          onChangeText = {(value) => this.setState({name:value})}
          />
       
        <TextInput
          value1={this.state.order}
          placeholder = "ORDER"
          onChangeText = {(value1) => this.setState({order:value1})}
          />
        
        <TextInput
          value2={this.state.phone}
          placeholder = "PHONE"
          onChangeText = {(value2) => this.setState({phone:value2})}
          />
        
        <TouchableHighlight onPress={() => {
        this.itemsRef.push({name: this.state.name, phone: this.state.phone, order: this.state.order, status: ''}); 
        this.setModalVisible(!this.state.modalVisible)}}>
        <Text>Submit Order</Text>
        </TouchableHighlight>
        
        <TouchableHighlight onPress={() => { 
        this.setModalVisible(!this.state.modalVisible)}}>
        <Text>Cancel</Text>
        </TouchableHighlight>
          
        </View>
        </View>
        </Modal>
        
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        //DATA FROM MATCHES
        renderRow= {this.renderRow}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        renderHeader={() => <SearchHeader />}
        renderFooter={() => <LoadMore />}
      />
      
      <AddButton onPress={this.addItem.bind(this)} title="Request Order" />
      </View>
    );
  }
}


export default OrderReqDriver;