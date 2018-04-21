import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class browse extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>browse</Text>
            </View>
        );
    }
}

export default browse;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});