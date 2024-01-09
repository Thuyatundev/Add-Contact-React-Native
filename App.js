import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [contactList, setContactList] = useState([]);

  const nameInputHandler = (val) => {
    setNameInput(val);
    // console.log(val);
  };

  const phoneInputHandler = (val) => {
    setPhoneInput(val);
    // console.log(val);
  };

  const addContactHandler = () => {
    setContactList((prev) => [
      ...prev,
      { id: Math.random().toString(), name: nameInput, phone: phoneInput },
    ]);
    console.log(contactList);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Add A New Contact</Text>
        <TextInput
          placeholder="Enter Your Name..."
          onChangeText={nameInputHandler}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter Your Phone..."
          onChangeText={phoneInputHandler}
          style={styles.input}
        />
        <View style={styles.btn}>
        <Button title="Save" onPress={addContactHandler} style={{ height: '100', }} color="#666666"/>
        </View>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.heading}>Contact List</Text>
        {contactList.map((contact)=>(
          <View key={contact.id} style={styles.contactList}>
          <Text style={styles.contactName}>name - {contact.name}</Text>
          <Text style={styles.contactPhone}>phone - {contact.phone}</Text>
          </View>
          
        ))}
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
  list: {
    color: "blue",
  },
  heading: {
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
  contactList: {
    padding:10,
    backgroundColor:"#666666",
    marginBottom:12,
    borderRadius:10,
    width:"auto"
  },
  contactName:{
    color:"white",
    fontSize:16,
    fontWeight:"600",
    paddingBottom:6,
    textAlign:"center",
    justifyContent:"center"
  },
  contactPhone:{
    color:"white",
    fontSize:16,
    fontWeight:"600",
    paddingBottom:6,
    textAlign:"center",
    justifyContent:"center"
  },
})
