import React from "react";
import Lottie from 'lottie-react-native';
import { View, Dimensions, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LottieView from 'lottie-react-native';



const {height, width}= Dimensions.get('screen')

export default function Splash(){

    const navigation = useNavigation()

    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#F15151', padding:20}}>
            <Text style={{fontWeight: 'bold',
                    color: 'white', fontSize:height*0.04, textAlign:'center', marginTop:10}}> Calculadora Num </Text>
        <Lottie 
            style={{height:height*0.35, width:width*0.35}}
            source={require('../lotties/calculator.json')} 
            autoPlay 
            autoSize={false}
            loop = {false}
            speed = {1}
            // onAnimationFinish={()=> navigation.navigate('Teste')}
            onAnimationFinish={()=> navigation.navigate('Newton')}
        /> 
        </View>
    )
}