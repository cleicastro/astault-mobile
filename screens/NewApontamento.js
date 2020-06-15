import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';

import logo from '../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';

export default function NewApontamento() {

  const [values, setValues] = React.useState({
    data_apontamento: '',
    origem: '',
    destino: '',
    aplicacao: '',
    material: '',
    quantidade: 6,
    veiculo: '',
    placa: '',
    km_origem: 0,
    km_aplicacao: 0,
    horario_saida: '',
    horario_chegada: '',
    peso_bruto: 0,
    peso_liquido: 0,
  });

  const navigation = useNavigation();

  function save() {
    navigation.navigate("apontamentos", { values });
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
      </View>
      <View style={styles.apontamento}>

        <TextInput
          style={styles.input}
          placeholder="Digite a data"
          onChangeText={(text) => setValues((prev) => ({ ...prev, 'data_apontamento': text }))}
          returnKeyType="next"
        />

        <TextInput
          style={styles.input}
          placeholder="Digite a aplicação"
          onChangeText={(text) => setValues((prev) => ({ ...prev, 'aplicacao': text }))}
          returnKeyType="next"
        />

        <TextInput
          style={styles.input}
          placeholder="Material"
          onChangeText={(text) => setValues((prev) => ({ ...prev, 'material': text }))}
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          placeholder="Quantidade"
          onChangeText={(text) => setValues((prev) => ({ ...prev, 'quantidade': text }))}
          keyboardType="numeric"
          returnKeyType="next"
        />

        <TextInput
          style={styles.input}
          placeholder="Origem"
          onChangeText={(text) => setValues((prev) => ({ ...prev, 'origem': text }))}
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          placeholder="Destino"
          onChangeText={(text) => setValues((prev) => ({ ...prev, 'material': text }))}
          returnKeyType="next"
        />

        <TextInput
          style={styles.input}
          placeholder="Veículo"
          onChangeText={(text) => setValues((prev) => ({ ...prev, 'placa': text }))}
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          placeholder="Placa"
          onChangeText={(text) => setValues((prev) => ({ ...prev, 'veiculo': text }))}
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          placeholder="Tara"
          onChangeText={(text) => setValues((prev) => ({ ...prev, 'tara': text }))}
          keyboardType="numeric"
          returnKeyType="next"
        />

        <TextInput
          style={styles.input}
          placeholder="km origem"
          onChangeText={(text) => setValues((prev) => ({ ...prev, 'km_origem': text }))}
          keyboardType="numeric"
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          placeholder="km aplicação"
          onChangeText={(text) => setValues((prev) => ({ ...prev, 'km_aplicacao': text }))}
          keyboardType="numeric"
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          placeholder="Peso bruto"
          onChangeText={(text) => setValues((prev) => ({ ...prev, 'peso_bruto': text }))}
          keyboardType="numeric"
          returnKeyType="next"
        />

        <TextInput
          style={styles.input}
          placeholder="hora saída"
          onChangeText={(text) => setValues((prev) => ({ ...prev, 'horario_saida': text }))}
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          placeholder="hora chegada"
          onChangeText={(text) => setValues((prev) => ({ ...prev, 'horario_chegada': text }))}
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          placeholder="Peso líquido"
          onChangeText={(text) => setValues((prev) => ({ ...prev, 'peso_liquido': text }))}
          keyboardType="numeric"
        />
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={save}>
            <Text style={styles.actionText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

NewApontamento.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    // paddingTop: Constants.statusBarHeight + 20,
  },
  header: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  apontamento: {
    marginBottom: 24,
    borderRadius: 8,
    flexDirection: "column",
    marginTop: 48,
  },

  inputView: {
    flexDirection: "row",
  },
  input: {
    height: 60,
    borderColor: "silver",
    borderWidth: 1,
    paddingHorizontal: 24,
    fontSize: 16,
    backgroundColor: "#FFF",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
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
