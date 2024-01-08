import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Add A New Contact</Text>
        <TextInput placeholder='Enter Your Name...' style={styles.input}/>
        <TextInput placeholder='Enter Your Phone...' style={styles.input}/>
        <Button title="Save"/>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.list}>Contact numbers are here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  padding:20,
  flex:1
  },
  inputContainer:{
  flex:1,
  },
  listContainer:{
    flex:1,
  },
  list:{
    color:"blue",
  },
  heading:{
    marginBottom:20,
    textAlign:'center',
    fontSize:22,
    fontWeight:'900',
  },
  input:{
    marginBottom:20,
    padding:10,
    borderRadius:10,
    borderWidth:2,
    borderColor:'black'
  }
});
