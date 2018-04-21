import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableHighlight,
    Camera,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native'

import t from 'tcomb-form-native';

import { StackNavigator } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Form = t.form.Form;

var options = {
    fields: {
        firstName: {
            label: "First Name",
            error: "How will we know who you are??"
        },
        lastName: {
            label: "Last Name",
            error: "How will we know which one you are?"
        },
        residence: {
            label: "Where do you live?", 
            placeholder: "e.g. Voorhies 108, East Village 102A",
            error: "How will we know where to bring your food?"
        },
        phone: {
            label: "Phone Number",
            placeholder: "(123)-456-7890",
            error: "We need this so the driver can call if there's a problem!"
        }
    }
};

const User = t.struct(
    {
        firstName: t.String,
        lastName: t.String,
        residence: t.String,
        phone: t.String
    }
);

class form extends Component {
    handleSubmit = () => {
        const value = this._form.getValue(); // use that ref to get the form value
        console.log('value: ', value);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior={"padding"} style={styles.container}>

                <KeyboardAwareScrollView style={styles.form}>

                    <Form type= {User} options={options} style={styles.form} ref={c => this._form = c} />

                    <TouchableHighlight style={styles.button} onPress={this.onPress} 
                        
                        onPress={this.handleSubmit} underlayColor='#99d9f4'>
                        <Text style={styles.buttonText}>Save</Text>

                    </TouchableHighlight>

                    <Button
                        title="Finish Signup"
                        onPress={() => this.props.navigation.navigate('tabs')}
                    />

                 </KeyboardAwareScrollView>

            </KeyboardAvoidingView>
        );
    }
}

export default form;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    }
});