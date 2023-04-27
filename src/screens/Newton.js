import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, TextInput, Button, Text, StyleSheet } from 'react-native';
import {
  atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
} from 'mathjs'
import * as math from 'mathjs';


/*const Newton = () => {
  const [func, setFunc] = useState('');
  const [result, setResult] = useState('');

  const calculateZeros = () => {
    try {
      const parser = math.parser();
      parser.evaluate(`f(x) = ${func}`);
      const newton = (func, x0) => {
        const derivative = math.derivative(`f(x)`, 'x').evaluate({ x: x0 });
        let x1 = x0 - math.evaluate(`f(x) / (${derivative})`, { x: x0 });
        let i = 0;
        while (Math.abs(x1 - x0) > 1e-10 && i < 100) {
          x0 = x1;
          x1 = x0 - math.evaluate(`f(x) / (${derivative})`, { x: x0 });
          i++;
        }
        return i === 100 ? null : x1;
      };
      const zeros = newton(`f(x)`, 1);
      setResult(zeros ? `Zero: ${zeros}` : `No zeros found`);
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };*/

  export default function Newton(){
    const [inputValue, setInputValue] = useState('');
    const [x0, setX0] = useState(1);
    const [result, setResult] = useState('');
  
    const NewtonFunc = (inputValue, x0) => {
      let aux = 0;
      let result = 0;
      try {
        const symbol = math.parse(inputValue); // criar o nó de símbolo
        const derivate = math.derivative(symbol, 'x'); // derivar o nó em relação a x
        while (aux != 10) {
          const f = symbol.compile(); // compilar o nó
          let resNormal = f.evaluate({ x: x0 });
          let resDerivate = derivate.evaluate({ x: x0 });
          if (resDerivate == 0) {
            result = 0;
            console.log('Division zero');
          }
          result = x0 - resNormal / resDerivate;
          aux++;
          x0 = result;
        }
        setResult(result);
      } catch (err) {
        console.log('Error in newton function' + err);
      } finally {
        console.log('Result:' + result);
      }
    };
  
    const handleCalculate = () => {
      const res = NewtonFunc(inputValue, x0);
      setResult(res);
    }
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="Digite a função"
        />
        <TextInput
          style={styles.input}
          onChangeText={setX0}
          value={x0.toString()}
          placeholder="Digite o valor inicial"
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={handleCalculate} style={styles.button}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        {result !== '' && <Text style={styles.result}>Resultado: {result}</Text>}
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
    button: {
      backgroundColor: '#0066CC',
      borderRadius: 5,
      padding: 10,
      width: '100%',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    result: {
      marginTop: 20,
      textAlign: 'center',
    },
  });
  

