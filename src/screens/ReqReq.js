import React, { Component } from 'react';
import { View, ListView, StyleSheet, Text, TouchableHighlight, Image, Modal, TextInput, Alert} from 'react-native';
import SearchHeader from '../DesignComponents/SearchHeader';
import LoadMore from '../DesignComponents/LoadMore';
import AddButton from '../DesignComponents/AddButton';
import * as firebase from 'firebase';
 

const acceptedItems = [];

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

class ReqReq extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      //dataSource: ds.cloneWithRows(data),
      dataSource: ds,
      modalVisible: false,
      text: '',
      phone:'',
      name:'',
      status:'',
      item:'',
      itemList:'',
      restaurant:'',
      time: '',
      username: '',
    };
    
    this.itemsRef = this.getRef().child('drivers'); //items here refers to the items collection
    this.profileRef = this.getRef().child('profiles');
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
    
    itemsRef.on('value', (snap) => {
      let items = [];
      snap.forEach((child) => {
        if (child.val().status == 'currently accepting'){ 
        items.push({
          name: child.val().name,
          phone: child.val().phone,
          time: child.val().time,
          status: child.val().status,
          restaurant: child.val().restaurant,
          _key: child.key
        });
        }
      });
      
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(items),
      itemList: items
    });
    });
    
  }
  
pressRow = (item) =>{
    Alert.alert('Request Accepted!');
    this.itemsRef.child(item._key).update({status: "processing"});
  }
   
renderRow = (item) =>{
    return (
      <TouchableHighlight onPress={()=>{
              this.setState({item: item});
              this.setModalVisible(true);}}>
        <View style={styles.rowContainer}>
        <Image source={{ uri: item.photo}} style={styles.photo} />
       <Text style={styles.text}>
           {(item.name)}
       </Text>
       <Text style={styles.textSmall}>
           {(item.phone)}
       </Text>
       <Text style={styles.textSmall}>
           {(item.restaurant)}
       </Text>
        </View>
      </TouchableHighlight>
    );
  }
  
  updateStatus = (item) =>{
    Alert.alert('Request Submitted!');
    console.log(acceptedItems);
    this.profilesRef.child(this.props.navigation.state.params.username).update({request: item._key});
    //this.itemsRef.child(item._key).update({driver: user.displayName});
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
        
        <Text>DRIVER DETAILS</Text>
        
      <Text style={styles.text}>
           {(this.state.item.name)}
       </Text>
       <Text style={styles.text}>
           {(this.state.item.phone)}
       </Text>
       <Text style={styles.text}>
           {(this.state.item.restaurant)}
       </Text>
       <Text style={styles.text}>
           {(this.state.item.time)}
       </Text>
        
        <TouchableHighlight onPress={() => {
        this.updateStatus(this.state.item); 
          if (this.state.item.status == 'finished accepting'){
          Alert.alert(
          'This driver is no longer accepting orders'
          )
         }
        this.setState({item: ''});
        this.setModalVisible(!this.state.modalVisible)}}>
        <Text>Accept Request</Text>
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
      
       // <AddButton onPress={() => this.props.navigation.state.params.driver.update({status: 'finished accepting'})} title="Finish Accepting Orders" />
        <AddButton onPress={() => this.props.navigation.navigate('RequesterStep1', {username: username})} title="View Delivery List" />
      </View>
    );
  }
}


export default ReqReq;