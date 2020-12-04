/* eslint-disable prettier/prettier */
import React from 'react'
import { View, TextInput, Text, Button, TouchableOpacity } from 'react-native';

const DeleteAllButton = (props) => {
    return (
        <View style={{marginBottom:10,backgroundColor:"rgb(219, 46, 9)",borderRadius:10}} >
            <TouchableOpacity onPress={props.deleteAll} style={{backgroundColor:"white",padding:5,alignItems:"center",borderRadius:10}} >
                <Text style={{color:"rgb(32, 28, 94)",fontSize:20}}>Delete All</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DeleteAllButton;