import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Alert} from 'react-native';

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('')

    const pressHandler = () =>{
        if(value.trim()){
            onSubmit(value);
            setValue('');
        }else{
            Alert.alert('Название дела не может быть пустым!')
        }
    };

    return(
        <View style={styles.block}>
            <TextInput  
            placeholder="Что надо добавить?" 
            placeholderTextColor="#ccc" 
            style={styles.input}
            onChangeText={setValue}
            value={value}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="default"/>
            <Button color="#3949ab" title="Добавить" onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        padding: 10,
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    }
})