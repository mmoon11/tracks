// to access anything from a context object: need to import useContext, {Context}

import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const SignupScreen = ({navigation}) => {
    const {state, signup} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // the <> is to return multiple elements from the component
    // there's nothing wrapping it. can't do any styling with fragment (<>)
    return <View style={styles.container}>
        <Spacer>
            <Text h3>Sign Up for Tracker</Text>
        </Spacer>
        <Input 
            label='Email' 
            value={email} 
            onChangeText={(newEmail) => setEmail(newEmail)} 
            autoCapitalized='none'
            autoCorrect={false}
        />
        <Spacer />
        <Input 
            secureTextEntry
            label='Password' 
            value={password}
            onChangeText={(newPassword) => setPassword(newPassword)}
            autoCapitalized='none'
            autoCorrect={false}
        />
        <Spacer>
            <Button title='Sign Up' onPress={() => signup({email, password})} />
        </Spacer>
    </View>
};

// returns object to customize navigation and how it shows the screen
SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default SignupScreen;