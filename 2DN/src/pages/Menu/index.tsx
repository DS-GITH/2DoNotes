import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

export default function Menu() {
  return (

    <View style={styles.container}>
        
        <View>
            <Text style={styles.title}> Listagem </Text>
            <Entypo name="add-to-list" size={24} color="black" />
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },

});