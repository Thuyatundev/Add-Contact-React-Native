import { StyleSheet, Text, View,TextInput,Button,Alert } from 'react-native'
import { useState } from 'react';
import React from 'react'

const ContactInput = ({addContactHandler}) => {
  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [isRequired, setInputRequired] = useState(false);

  const nameInputHandler = (val) => {
    setNameInput(val);
    setInputRequired(false);
  };

  const phoneInputHandler = (val) => {
    setPhoneInput(val);
    setInputRequired(false);
  };

  const onPressHandler = ()=>{
    if(nameInput.trim() === '' && phoneInput.trim() === ''){
        setInputRequired(true);
        Alert.alert('Validation Error', 'Please Fill Name & Phone');
       }else{
    addContactHandler(
      { 
        id: Math.random().toString(), 
        name: nameInput,
         phone: phoneInput,
      });

    setNameInput("");
    setPhoneInput("");
  }
}

  return (
    <View style={styles.inputContainer}>
    <Text style={styles.heading}>Add A New Contact</Text>
    <TextInput
      placeholder="Enter Your Name..."
      onChangeText={nameInputHandler}
      style={styles.input}
      value={nameInput}
    />
    {isRequired && <Text style={{ color: 'red', paddingBottom: 10, }}>This Name is required</Text>}
    <TextInput
      placeholder="Enter Your Phone..."
      onChangeText={phoneInputHandler}
      style={styles.input}
      keyboardType = 'numeric'
      value={phoneInput}
    />
    {isRequired && <Text style={{ color: 'red', paddingBottom: 10, }}>This Phone Number is required</Text>}
    <View style={styles.btn}>
      <Button
        title="Save"
        onPress={onPressHandler}
        style={{ height: "100" }}
        color="#666666"
      />
    </View>
  </View>
  )
}

export default ContactInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
  },
  heading: {
    textShadowColor:"black",
    marginBottom: 20,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "900",
  },
  input: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
  },
})