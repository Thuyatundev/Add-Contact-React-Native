import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function ContactList({item,removeContact}) {

  const deleteContactHandler= ()=>{
    removeContact(item.id);
  }
  return (
    
    <View style={styles.contactList}>
      <Text></Text>
      <Text style={styles.contactName}>name - {item.name}</Text>
      <Text style={styles.contactPhone}>phone - {item.phone}</Text>
      <Button title='delete' color={'red'} onPress={deleteContactHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({
  contactList: {
    padding: 10,
    backgroundColor: "#666666",
    marginBottom: 12,
    borderRadius: 10,
    width: "auto",
  },
  contactName: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    paddingBottom: 6,
    textAlign: "center",
    justifyContent: "center",
  },
  contactPhone: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    paddingBottom: 6,
    textAlign: "center",
    justifyContent: "center",
  },
})