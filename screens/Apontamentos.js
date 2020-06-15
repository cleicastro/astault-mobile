import * as React from 'react';
import { Feather } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';

import Constants from 'expo-constants';
import { useNavigation, useRoute } from '@react-navigation/native';

import logo from '../assets/images/logo.png';

export default function LinksScreen() {

  const [apontamentos, setApontamentos] = React.useState([
    {
      id: 1,
      data_apontamento: '14/04/2020',
      origem: 'Mãe do Rio',
      destino: 'Ipixuna',
      aplicacao: 'Ruas(Recapementos)',
      material: 'CAVQ Faixa 6',
      quantidade: 56,
      veiculo: 'OTQ-1234',
      km_origem: 1233,
      km_origem: 1233,
      km_aplicacao: 1424,
      horario_saida: '05:45',
      horario_chegada: '06:56',
      peso_bruto: 12.456,
      peso_liquido: 11.145,
    }
  ]);


  const navigation = useNavigation();
  const route = useRoute();

  const newApontamento = route.params;

  React.useEffect(() => {
    if (newApontamento) {
      const data =
        console.log([{ ...apontamentos, ...newApontamento.values, id: apontamentos.length + 1 }]);

      setApontamentos((prev) => ([...prev, { ...newApontamento.values, id: apontamentos.length + 2 }]));
    }
  }, [newApontamento]);

  function navigateToDetail(apontamento) {
    navigation.navigate('Detail', { apontamento });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text styel={styles.headerText}>
          Total de <Text styele={styles.headerTextBold}> {apontamentos.length} apontamentos </Text>
        </Text>
      </View>

      <Text style={styles.title}> Bem-Vindo! </Text>
      <Text style={styles.description}> Crie e gerencie os apontamentos das atividades asfalticas </Text>

      <FlatList
        data={apontamentos}
        style={styles.apontamentoList}
        showsVerticalScrollIndicator={false}
        keyExtractor={apontamento => String(apontamento.id)}
        renderItem={({ item }) => (
          <View style={styles.apontamento}>
            <View style={styles.pontamentoProperty}>
              <Text style={styles.apontamentoLabel}> Aplicação: </Text>
              <Text style={styles.apontamentoLabel}> Data: </Text>
            </View>
            <View style={styles.pontamentoProperty}>
              <Text style={styles.apontamentoValue}> {item.aplicacao} </Text>
              <Text style={styles.apontamentoValue}> {item.data_apontamento} </Text>
            </View>

            <View style={styles.pontamentoProperty}>
              <Text style={styles.apontamentoLabel}> Material: </Text>
              <Text style={styles.apontamentoLabel}> Placa: </Text>
            </View>
            <View style={styles.pontamentoProperty}>
              <Text style={styles.apontamentoValue}>  {item.material} </Text>
              <Text style={styles.apontamentoValue}>  {item.veiculo} </Text>
            </View>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(item)}
            >
              <Text style={styles.detailsButtonText}> Ver mais detalhes </Text>
              <Feather name="arrow-right" size={15} color="#BB6BD9" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    // paddingTop: Constants.statusBarHeight,
  },
  header: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center"
  },
  headerText: {
    fontSize: 15,
    color: "#737380"
  },
  headerTextBold: {
    fontWeight: "bold"
  },
  title: {
    fontSize: 30,
    marginBottom: 15,
    marginTop: 16,
    color: "#13131a",
    fontWeight: "bold"
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#737380"
  },
  apontamentoList: {
    marginTop: 32,
  },
  apontamento: {
    padding: 16,
    marginBottom: 24,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 16,
    flexDirection: "column",
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
  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  detailsButtonText: {
    color: "#BB6BD9",
    fontSize: 15,
    fontWeight: "bold"
  }
});
