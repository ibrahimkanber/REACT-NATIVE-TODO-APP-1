/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const Flat = (props) => {
    return (
        <FlatList
            data={props.todos}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity   style={[styles.container, { display: item.text == '' ? 'none' : 'flex' }]}>
                        <Text style={styles.textItem}>{item.text}</Text>
                        <TouchableOpacity onPress={() => props.Updatelist(item.id)} style={styles.deleteButton} >
                            <Text style={[styles.textDelete]}>Delete</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )
            }
            }
            keyExtractor={(item, index) => index.toString()}
         
        />


    )

}





export default Flat;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(28, 145, 131,0.8)',
        marginTop: 10,
        flexDirection:"row",
        padding:10,
        borderRadius:5
       
     
    },

    textItem:{
        fontSize:20,
        fontFamily:"sans-serif",
        color:"rgb(242, 201, 17)"
    },

    deleteButton:{
        position:"absolute",
        right:5,top:"30%",
        backgroundColor:"rgba(230, 67, 55,0.9)",
        padding:5,borderRadius:5
    },

    textDelete: {
        color: 'white',
        fontSize:15
    }

})