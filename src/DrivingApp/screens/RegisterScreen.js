import { View, Text,TextInput, Button, Keyboard, Alert,StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { writeUserData } from '../firebaseConfig'

const RegisterScreen = () => {
const [name, setName] = useState('')
const [phone, setPhone] = useState('')

const onChanged = (text) => {
    let newText = '';
    let numbers = '0123456789';

    for (var i=0; i < text.length; i++) {
        if(numbers.indexOf(text[i]) > -1 ) {
            newText = newText + text[i];
        }
        else {
            alert("please enter numbers only");
        }
    }
    setPhone(newText);
}
  return (
    <View>
    <TextInput
    placeholder='Username'
    value={name}
    onChangeText={text => setName(text)}
    />
    <TextInput
    placeholder='Phone Number'
    value={phone}
    onChangeText={text => onChanged(text)}
    maxLength={10}
    />
     <View>
        <Button 
            title='submit'
            onPress={() => [writeUserData(name, phone), console.log("clicked")]}
         />
    </View>
</View>
  )
}

export default RegisterScreen