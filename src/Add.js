/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';

const Add = (props) => {
    return (
        <View style={{flex:1,marginLeft:10}} >
            <TouchableOpacity onPress={() => props.submitHandler(props.entry)} style={{backgroundColor:"rgba(145, 28, 112,0.7)",paddingVertical:16,paddingHorizontal:10,borderRadius:5}}>
                <Text style={{color:"white",textAlign:"center",fontSize:13}}>ADD</Text>
            </TouchableOpacity>
        </View>

    )

}

export default Add;