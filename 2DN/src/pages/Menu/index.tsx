import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icons from '@expo/vector-icons/Entypo';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../navigation/RooStackParamsList";
import { ScreenName } from '../../constants/ScreenName'

type Props = NativeStackScreenProps<RootStackParamsList, ScreenName>

const Menu = ({ route, navigation } : Props) => {
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

            <TouchableOpacity 
            style={styles.addbutton} 
            onPress={() => {navigation.navigate(ScreenName.Adding,{} )}}>

                <Icons name="add-to-list" color={'#fff'} size={24} />

            </TouchableOpacity>

        </View>

            <View style={styles.listBox}>
                <FlatList
                data={data} 
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => ( 
                    <TouchableOpacity style={styles.itemButton}>
                        <Text style={styles.itemText}>{item.title}</Text> 
                    </TouchableOpacity>)}/>
            </View>

        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    listBox: {
        flex: 1,
        padding: 20,

    },
    itemText:{
        fontSize: 15,
    },
    itemButton:{},
});

export default Menu;
