import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';

const TitledInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

    const { inputStyle, labelStyle, containerStyle,} = styles;

    return (
      <ScrollView style={styles.scroll}>
        <View style={containerStyle}>
            <Text style={labelStyle}>{label.toUpperCase()}</Text>
            <TextInput
                autoCorrect={false}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
            />
        </View>
        </ScrollView>
    );
};

const styles = {
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 2,
        color: '#262626',
        fontSize: 18,
        fontWeight: '200',
        flex: 1,
        height: 40,
    },
    labelStyle: {
        fontSize: 12,
        color: '#7F7D7D',
        fontWeight: '200',
        flex: 1,
    },
    containerStyle: {
        height: 45,
        justifyContent: 'center',
        flexDirection: 'column',
         alignItems: 'flex-start',
         width: '100%',
         borderColor: '#D4D4D4',
        borderBottomWidth: 1,
    },
    scroll: {
    backgroundColor: '#FFFFFF',
    padding: 30,
    flexDirection: 'column',

},
};

export { TitledInput };