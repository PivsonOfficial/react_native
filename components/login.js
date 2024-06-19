import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button, View} from 'react-native';

const Login = () => {
  const [text, onChangeText] = React.useState('');
  const [text2, onChangeText2] = React.useState('');
  const [ID, onChangeID] = React.useState('');

  return (
    <SafeAreaView>
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText2}
        value={text2}
        placeholder="Password"
        
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeID}
        value={ID}
        placeholder="ID"
        keyboardType='numeric' 
      />
      
      <View style={styles.submitbutton}>
      <Button
        title="Submit"        
      />
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    
    width: 150,
  },
  
  submitbutton: {
   paddingTop: 15,
   margin: 12,
   padding: 10,
  },
});

export default Login;