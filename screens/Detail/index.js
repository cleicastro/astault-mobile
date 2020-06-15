import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Constants from 'expo-constants';
import logo from '../../assets/images/logo.png';

const Detail = ({ item }) => {

    const navigation = useNavigation();
    const route = useRoute();

    const apontamento = route.params.apontamento;

    function navigationBack() {
        navigation.goBack();
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} />
            </View>
            <View style={styles.apontamento}>
                <View style={styles.pontamentoProperty}>
                    <Text style={styles.apontamentoLabel}> Aplicação: </Text>
                    <Text style={styles.apontamentoLabel}> Data: </Text>
                </View>
                <View style={styles.pontamentoProperty}>
                    <Text style={styles.apontamentoValue}> {apontamento.aplicacao} </Text>
                    <Text style={styles.apontamentoValue}> {apontamento.data_apontamento} </Text>
                </View>

                <View style={styles.pontamentoProperty}>
                    <Text style={styles.apontamentoLabel}> Material: </Text>
                    <Text style={styles.apontamentoLabel}> Placa: </Text>
                </View>
                <View style={styles.pontamentoProperty}>
                    <Text style={styles.apontamentoValue}>  {apontamento.material} </Text>
                    <Text style={styles.apontamentoValue}>  {apontamento.veiculo} </Text>
                </View>
                <Text style={styles.apontamentoTitle}> Quantidade: {apontamento.quantidade} </Text>
            </View>
            <View style={styles.apontamentoBox}>
                <Text style={styles.apontamentoTitle}> {apontamento.origem} </Text>
                <Text style={styles.apontamentoTitle}>{apontamento.destino}</Text>

                <View style={styles.pontamentoProperty}>
                    <Text style={styles.apontamentoLabel}> Horário saída: </Text>
                    <Text style={styles.apontamentoLabel}> Horário chegada: </Text>
                </View>

                <View style={styles.pontamentoProperty}>
                    <Text style={styles.apontamentoValue}>  {apontamento.horario_saida} </Text>
                    <Text style={styles.apontamentoValue}>  {apontamento.horario_chegada} </Text>
                </View>

                <View style={styles.pontamentoProperty}>
                    <Text style={styles.apontamentoLabel}> Peso bruto: </Text>
                    <Text style={styles.apontamentoLabel}> Peso líquido: </Text>
                </View>

                <View style={styles.pontamentoProperty}>
                    <Text style={styles.apontamentoValue}>  {apontamento.peso_bruto} </Text>
                    <Text style={styles.apontamentoValue}>  {apontamento.peso_liquido} </Text>
                </View>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={navigationBack}>
                        <Text style={styles.actionText}>Remover</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        // paddingTop: Constants.statusBarHeight + 20,
    },
    header: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center"
    },
    apontamento: {
        padding: 16,
        marginBottom: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 16,
        flexDirection: "column",
        marginTop: 48,
    },
    pontamentoProperty: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    apontamentoLabel: {
        alignItems: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
    apontamentoValue: {
        paddingBottom: 12,
    },

    apontamentoBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 16,
    },
    apontamentoTitle: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#13131A",
        lineHeight: 30,
    },
    actions: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    action: {
        marginTop: 16,
        backgroundColor: "#BB6BD9",
        borderRadius: 8,
        height: 50,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    actionText: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: "bold"
    }
});

export default Detail;