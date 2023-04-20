import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Newton from '../screens/Newton';

const Stack = createNativeStackNavigator();

export default function Rotasprincipais(){

   // const navigation = useNavigation()
    
    return(
        <NavigationContainer
        independent = {true}
        >
            <Stack.Navigator initialRouteName = "Splash">
                <Stack.Screen name = "Newton" component = {Newton} options={{headerShown:false}}/>


            </Stack.Navigator>
        </NavigationContainer>
    );
}