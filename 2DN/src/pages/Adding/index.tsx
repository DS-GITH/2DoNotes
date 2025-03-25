import React,  {useState  }  from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icons from '@expo/vector-icons/Entypo';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../navigation/RooStackParamsList";
import { ScreenName } from '../../constants/ScreenName';

type Props = NativeStackScreenProps<RootStackParamsList, ScreenName>


const Adding = ({ route, navigation } : Props) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');

    const isValid = () => {
        if((title !== '') && (title !== null)){
            return true;
        }
        return false;
    };

    const onSave = () => {
        
        if(isValid()){
            console.log('Salvando...');
        }
            
    };
    
    return(
        <View style={styles.container}>
            <Text style={styles.pageTitle}> Adicione uma tarefa </Text>
            
            <TextInput 
                style={styles.input}
                placeholder="Título"
                value={title}
                onChangeText={(text) => {
                    setTitle(text);
                }}
            />

            <TextInput 
                style={[styles.input, styles.textArea]} // Aplicando um estilo diferente para multiline
                placeholder="Descrição"
                multiline={true}
                numberOfLines={4}
                value={description}
                onChangeText={(text) => {
                    setDescription(text);
                }}
            />

            <TouchableOpacity style={styles.midiaButton}>
                <Icons name="camera" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.addButton, (!isValid()) ? styles.invalidAddButton : '' ]}>
                <Text style={styles.addButtonText}>Adicionar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton}
                 onPress={() => {navigation.goBack()}}>  

                <Text style={styles.cancelButtonText}> Cancelar </Text>

            </TouchableOpacity>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pageTitle:{
        textAlign: 'center',
        fontSize: 20,
        marginTop: 0,
        color: '#5758BB',
        fontWeight: 'bold',
        marginBottom: 50,
        position: 'relative',
        bottom: 50,
    },
    input: {
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: '#5758BB',
        padding: 10,
        marginBottom: 15,
    },
    textArea: {
        minHeight: 100, 
        textAlignVertical: 'top', 
        borderWidth: 1, 
        borderRadius: 5, 
        marginTop: 10,
    },
    midiaButton:{
        backgroundColor: '#5758BB',
        padding: 20,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    addButton:{
        backgroundColor: '#5758BB',
        padding: 20,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        width: '70%',
    },
    invalidAddButton:{
        opacity: 0.5,
    },
    cancelButton:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        width: '70%',
        bottom: 0,
    },
    addButtonText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    cancelButtonText:{
        color: '#833471',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Adding;