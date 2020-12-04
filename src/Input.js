/* eslint-disable prettier/prettier */
import React,{useRef} from 'react';
import { View, TextInput, Text, Button } from 'react-native';


const Input = (props) => {
    return (
        <View style={{backgroundColor:"rgba(255,255,255,0.7)",borderRadius:5,paddingHorizontal:15,paddingVertical:0,flex:5}}>
            <TextInput onChangeText={(val) => props.updateText(val)} style={{fontSize:20}}>{props.entry}</TextInput>
          
        </View>
    )
}


export default Input;