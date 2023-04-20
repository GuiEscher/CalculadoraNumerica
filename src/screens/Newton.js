import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import math from 'mathjs';
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Newton = () => {

  const navigation = useNavigation()
  const [func, setFunc] = useState('');
  const [result, setResult] = useState('');

  const calculateZeros = () => {
    try {
      const zeros = math
        .evaluate(`newton(${func}, x, 1)`)
        .toString()
        .replace(/,/g, ', ');
      setResult(`Zeros: ${zeros}`);
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calculate Zeros with Newton's Method</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a function"
        value={func}
        onChangeText={setFunc}
      />
      <Button title="Calculate" onPress={calculateZeros} />
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  result: {
    marginTop: 20,
    textAlign: 'center',
  },
});

export default Newton;
