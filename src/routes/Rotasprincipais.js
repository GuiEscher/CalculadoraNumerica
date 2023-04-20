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
import Splash from '../screens/Splash';

const Stack = createNativeStackNavigator();

export default function Rotasprincipais(){

   // const navigation = useNavigation()
    
    return(
        <NavigationContainer >
            <Stack.Navigator initialRouteName = "Splash">
                <Stack.Screen name = "Splash" component = {Splash} options={{headerShown:false}}/>
                <Stack.Screen name = "Newton" component = {Newton} options={{headerShown:false}}/>


            </Stack.Navigator>
        </NavigationContainer>
    );
}