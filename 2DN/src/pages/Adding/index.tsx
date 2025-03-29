import React, { useEffect, useState } from "react"; // Remove useCallback
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icons from '@expo/vector-icons/Entypo';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../navigation/RootStackParamsList";
import { ScreenName } from '../../constants/ScreenName';
import AsyncStorage from "@react-native-async-storage/async-storage";

// Estudar
type Props = NativeStackScreenProps<RootStackParamsList, ScreenName>

const Adding = ({ route, navigation }: Props) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');

    // Estudar
    const editTask = route.params?.task;
    const editando = !!editTask;

    // Estudar
    useEffect(() => {
        if (editTask) {
            setTitle(editTask.title);
            setDescription(editTask.description || ''); // Usa '' se description for undefined
            setPhoto(editTask.photo || ''); // Usa '' se photo for undefined
        }}, [editTask]);

    const isValid = () => {
        if ((title !== '') && (title !== null)) { 
            return true;
        }
        return false;
    };

    
    const onSave = async () => {
        if (isValid()) {
            try {
    // Estudar
                // Carrega as tarefas existentes do AsyncStorage
                const data = await AsyncStorage.getItem("tasks");
                let tasks: { id: number; title: string; description: string; photo: string }[] = data ? JSON.parse(data) : [];
    // Estudar
                if (editTask) {
                    // Modo de edição: atualiza a tarefa existente
                    tasks = tasks.map((task) =>
                        task.id === editTask.id ? { ...task, title, description, photo } : task
                    );
    // Estudar
                } else {
                    // Modo de criação: adiciona uma nova tarefa
                    const id = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
                    const task = {
                        id,
                        title,
                        description,
                        photo,
                    };
                    tasks.push(task);
                }
    
                // Salva o array atualizado no AsyncStorage
                await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
                navigation.goBack();
            } catch (error) {
                console.error("Erro ao salvar tarefa:", error);
                Alert.alert("Erro", "Não foi possível salvar a tarefa.");
            }
        } else {
            Alert.alert("Erro", "O título da tarefa não pode estar vazio.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}> {editando ? "Editar Tarefa" : "Adicione uma tarefa"} </Text>
            <TextInput 
                style={styles.input}
                placeholder="Título"
                value={title}
                onChangeText={(text) => {
                    setTitle(text);
                }}
            />
            <TextInput 
                style={[styles.input, styles.textArea]}
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
            <TouchableOpacity
                style={[styles.addButton, (!isValid()) ? styles.invalidAddButton : '' ]}
                onPress={onSave}
            >
                <Text style={styles.addButtonText}>
                {editando ? "Salvar" : "Adicionar"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => { navigation.goBack(); }}
            >
                <Text style={styles.cancelButtonText}> Cancelar </Text>
            </TouchableOpacity>
        </View>
    );
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