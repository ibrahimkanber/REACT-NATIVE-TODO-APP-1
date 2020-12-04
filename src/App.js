/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, ImageBackground, KeyboardAvoidingView } from 'react-native';
import Add from './Add';
import DeleteAllButton from './DeleteAllButton';
import Flat from './Flat';
import Input from './Input';


const App = () => {
  const [todos, setTodos] = useState([{ text: '', id: 0,isDone:false }]);
  const [entry, setEntry] = useState('');
  const [idCounter, setIdCounter] = useState(0);
  const [todoCounter, setTodoCounter] = useState(0);

  let submitHandler = (text) => {
    setIdCounter(idCounter + 1);
    setEntry('');
    setTodoCounter(text !== "" ? todoCounter + 1 : todoCounter)
    setTodos(() => {
      return [...todos, { text: text, id: idCounter,isDone:false }]
    });
  }

  let Updatelist = (index) => {
    let filteredArray = todos.filter(el => el.id !== index);
    setTodos(() => filteredArray);
    setTodoCounter(todoCounter - 1)
  }

  let updateText = (val) => {
    setEntry(val);

  }



  let deleteAll = () => {
    setTodos([{ text: '', id: 0 }]);
    setTodoCounter(0)

  }

  return (
    <ImageBackground source={require("./maxresdefault.jpg")} style={{width:420,flex:1}}>
      <KeyboardAvoidingView style={{flex:1}}>
    <View style={styles.container}>
      <View style={{ backgroundColor: "rgba(28, 145, 131,0.7)", paddingVertical: 8 ,borderRadius:5}}><Text style={{ fontSize: 20, textAlign: "center", color: "white" }}>
        Number of Tasks :
      <Text style={{ color: "rgb(242, 17, 58)" }}>  {todoCounter}</Text></Text></View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems:"center",marginVertical:15}}>
        <Input entry={entry} updateText={updateText} />
        <Add submitHandler={submitHandler} entry={entry} />
      </View>
      <DeleteAllButton deleteAll={deleteAll} />

      <Flat todos={todos} Updatelist={Updatelist} todoCounter={todoCounter}  />
    </View>
    </KeyboardAvoidingView>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 25,
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1
  }
})

export default App;