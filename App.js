import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import ContactList from "./components/ContactList";
import ContactInput from "./components/ContactInput";

export default function App() {
  
  const [contactList, setContactList] = useState([]);
  
  const addContactHandler = (contact) => {
    setContactList((prev) => [
      ...prev,
      contact
    ]);
  };
  const removeContact = (id) =>{
    setContactList((pre)=> pre.filter((contact) => contact.id !== id));
  }
  return (
    <View style={styles.container}>
      {/* Contact Input  */}
      <ContactInput addContactHandler={addContactHandler} />
      {/* Contact Input  */}

      {/* show contact */}
      <View style={styles.listContainer}>
        {/* <ScrollView>
        <Text style={styles.heading}>Contact List</Text>
        {contactList.map((contact)=>(
          <View key={contact.id} style={styles.contactList}>
          <Text style={styles.contactName}>name - {contact.name}</Text>
          <Text style={styles.contactPhone}>phone - {contact.phone}</Text>
          </View>
        ))}
        </ScrollView> */}
        <Text style={styles.heading}>Contact List</Text>
        <FlatList
          data={contactList}
          renderItem={({ item }) => {
            return (
             <ContactList item={item} removeContact={removeContact}/>
            )}
          }  
          keyExtractor={(contact) => contact.id}
        />
      </View>
      {/* show contact */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
  heading: {
    textShadowColor:"black",
    marginBottom: 20,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "900",
  },
});
