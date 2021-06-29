//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [count,setCount] = useState(0);
  
  function aumentar(){
    setCount(count+1);
    console.log(count);
  }

  function diminuir(){
    setCount(count-1);
  }

  return (
    <View style = {styles.container}>
      <Text style={styles.textTitle}>Contador de Pessoas </Text>
      <View>
        <Text style = {styles.contador}> {count} </Text>
      </View>
      <TouchableOpacity style = {styles.button} onPress = {aumentar}>
        <Text style ={styles.Text}> + </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.button} onPress = {diminuir}>
        <Text style ={styles.Text}> - </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6495ED',
    alignItems: 'center',
    justifyContent: 'center'
  },

  button: {
    width: 210,
    height: 75,
    backgroundColor:'#191970',
    margin: 25,
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center',
    textAlign: 'center'
    
  },

  textTitle: {
    color: 'white',
    fontSize: 30
  },

  Text: {
    color: 'white',
    fontSize: 25
  },

  contador: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 25,
    height: 100,
    width: 200,
    borderRadius: 15,
    margin: 25,
    textAlign: 'center',
    padding: 30

  },

});