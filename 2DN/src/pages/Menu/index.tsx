import React, { useState, useCallback } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icons from "@expo/vector-icons/Entypo";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../navigation/RooStackParamsList";
import { ScreenName } from "../../constants/ScreenName";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamsList, ScreenName.Menu>;

const Menu = ({ navigation }: Props) => {
    const [tasks, setTasks] = useState<{ id: number; title: string }[]>([]);

    const loadTasks = async () => {
        try {
            const data = await AsyncStorage.getItem("tasks");
            if (data) {
                const parsedTasks = JSON.parse(data);
                setTasks(Array.isArray(parsedTasks) ? parsedTasks : [parsedTasks]);
            } else {
                setTasks(tasks);
            }
        } catch (error) {
            console.error("Erro ao carregar tarefas:", error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            loadTasks();
        }, [])
    );

    return (
        <View style={styles.container}>
            <View style={styles.Topbox}>
                <Text style={styles.title}>Listagem</Text>
                <TouchableOpacity
                    style={styles.addbutton}
                    onPress={() => navigation.navigate({ name: ScreenName.Adding, params: {} })}
                >
                    <Icons name="add-to-list" color={"#fff"} size={24} />
                </TouchableOpacity>
            </View>

            <View style={styles.listBox}>
                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.itemButton}>
                            <Text style={styles.itemText}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: "#fff",
    },
    Topbox: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
    },
    title: {
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
        color: "#5758BB",
        marginLeft: 30,
    },
    addbutton: {
        backgroundColor: "#5758BB",
        padding: 10,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 30,
    },
    listBox: {
        flex: 1,
        padding: 20,
    },
    itemText: {
        fontSize: 15,
    },
    itemButton: {},
});

export default Menu;

// Definição correta do RootStackParamsList
// Removido porque RootStackParamsList já está sendo importado
