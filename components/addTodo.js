import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View, Dimensions } from 'react-native';


export default function AddTodo({submitHandler}){
    const [text, setText] = useState('');

    const changeHandler = (value) => {
        setText(value);
    }

    return ( 
        <View>
            <TextInput
                style={StyleSheet.input}
                placeholder='Yapılacakları Yazınız..'
                onChangeText={changeHandler}
                borderRadius={20}
                backgroundColor= '#fbe9e7'
                margin= {12}
                padding={3}
                textAlign= 'center' 

             />
            <View style={StyleSheet.buttonContainer}>
                <Button onPress={() => 
                submitHandler(text) } 
                title= 'Ekle'
                color= '#c97b63' 
                />
            </View>
        </View>
    ) 
}
const style = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#546e7a',
        width: Dimensions.get("window").width / 2,
        alignSelf: 'center',
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
        margin: 5
    }

})

    
