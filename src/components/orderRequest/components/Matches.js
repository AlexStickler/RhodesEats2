import React, { Component } from 'react';
import { View, ListView, StyleSheet, Text,TouchableHighlight, } from 'react-native';
import Row from './Row';
import SearchHeader from './SearchHeader';
import LoadMore from './LoadMore';
import data from './data'

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
});

class Matches extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }
 render() {
    return (
    <TouchableHighlight onPress={this.doSomething.bind(this)}>
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        //DATA FROM MATCHES
        renderRow={(data) => <Row {...data} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        renderHeader={() => <SearchHeader />}
        renderFooter={() => <LoadMore />}
      />
      </TouchableHighlight>
    );
  }
}


export default Matches;