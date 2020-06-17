import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'


export default function Header(){
    return (
        <View style={styles.header}>
            <Text style={styles.title}> Yapılacaklar Listesi </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: Dimensions.get('window').height / 10,
        //height: 70,
        paddingTop: 40,
        backgroundColor: '#cb9b8c'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },

})