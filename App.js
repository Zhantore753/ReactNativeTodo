import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {Navbar} from './src/Navbar';
import {AddTodo} from './src/AddTodo';
import {Todo} from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos(prev =>[
      ...prev, 
      {
      id: Date.now().toString(),
      title
    }])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo=>todo.id !== id))
  }

  return (
    <ScrollView>
      <Navbar title="Список дел"/>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>

        <View>
          { todos.map(todo => (
            <Todo todo={todo} key={todo.id.toString()} onRemove={removeTodo}/>
          )) }
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  text:{
    color: '#000',
  }
});