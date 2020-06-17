import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ToDoItem({item, pressHandler}){
    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>
                {item.text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        borderRadius: 30,
        margin: 5,
        padding: 10,
        flex: 0.5,
        backgroundColor: "#ffccbc",
        textAlign: 'center',
    }
})