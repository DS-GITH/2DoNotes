import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

export default function Menu() {
    const data = [
        
        {id: 1, title: 'Estudar sobre python', done: false},
        {id: 2, title: 'Estudar sobre React-Native', done: false},
        {id: 3, title: 'Estudar sobre FireBase', done: false},
        {id: 4, title: 'Estudar sobre Javascript', done: false},
]
  return (

    <View style={styles.container}>

        <View style={styles.Topbox}>

            <Text style={styles.title}> Listagem </Text>

            <TouchableOpacity style={styles.addbutton}>
                <Entypo name="add-to-list" color={'#fff'} size={24} />
            </TouchableOpacity>

        </View>

            <FlatList 
            data={data} 
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => ( 

                <TouchableOpacity style={styles.itemButton}>
                    <Text style={styles.itemText}>{item.title}</Text> 
                </TouchableOpacity>
        )}
            
            />

        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: '#fff',
    },
    Topbox: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    title: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5758BB',
        marginLeft: 30,
    },
    addbutton: {
        backgroundColor: '#5758BB',
        padding: 10,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30,
    },
    itemText:{},
    itemButton:{},
});
