import React, { Component } from 'react';
import { Alert, View, ListView, StyleSheet, Text, TouchableHighlight, Image, Modal, TextInput} from 'react-native'; 
//import Row from './Row';
import SearchHeader from '../DesignComponents/SearchHeader';
import LoadMore from '../DesignComponents/LoadMore';
import AddButton from '../DesignComponents/AddButton';
import * as firebase from 'firebase';

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

class DriverReq extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      //dataSource: ds.cloneWithRows(data),
      dataSource: ds,
      modalVisible: false,
      restaurant: '',
      phone:'',
      name:'',
      status:'',
      time:'',
      item:'',
      itemList:'',
      username: '',
    };
    
    this.itemsRef = this.getRef().child('drivers'); //items here refers to the items collection
  }
  
  setModalVisible(visible){
    this.setState({modalVisible:visible});
  }

  getRef(){
    return firebase.database().ref();
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
      if (child.val().status == 'currently accepting'){
        items.push({
          name: child.val().name,
          phone: child.val().phone,
          restaurant: child.val().restaurant,
          _key: child.key,
          status: child.val().status,
          time: child.val().time,
          username: child.val().username,
        });
      }
      });
      
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(items)
    });
    });
    
  }
  
pressRow = (item) =>{
  if (item.status == 'request accepted'){
      Alert.alert('No going back: you already accepted a request');
  }
  else{
    if (this.itemsRef.child(item._key) == this.props.navigation.state.params.username){
    Alert.alert('Your offer has been deleted!');
    this.itemsRef.child(item._key).remove();
    //console.log(item);
  }
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
   const username = this.props.navigation.state.params.username;
    return (
      <View style={styles.container}>
      <Modal 
        animationType={"slide"}
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {}}>
        <View style={{marginTop: 22}}>
        <View>
        
        <Text>OFFER TO DRIVE</Text>
        
        <TextInput
          value={this.state.name}
          placeholder = "NAME"
          onChangeText = {(value) => this.setState({name:value})}
          />
       
        <TextInput
          value1={this.state.restaurant}
          placeholder = "RESTAURANT"
          onChangeText = {(value1) => this.setState({restaurant:value1})}
          />
          
        <TextInput
          value3={this.state.time}
          placeholder = "WHEN ARE YOU LEAVING?"
          onChangeText = {(value3) => this.setState({time:value3})}
          />
        
        <TextInput
          value2={this.state.phone}
          placeholder = "PHONE"
          onChangeText = {(value2) => this.setState({phone:value2})}
          />
        
        <TouchableHighlight onPress={() => {
        this.itemsRef.child(username).set({name: this.state.name, phone: this.state.phone, restaurant: this.state.restaurant, username: this.props.navigation.state.params.username, time: this.state.time, status: 'currently accepting'}); 
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
      
      <AddButton onPress={this.addItem.bind(this)} title="Offer to Drive" />
      <AddButton onPress={() => this.props.navigation.navigate('DriverStep1', {username: username, driver: this.itemsRef.child(username)})} title="View Requests" />
      </View>
    );
  }
}


export default DriverReq;