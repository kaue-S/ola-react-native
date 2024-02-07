import {
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const vai = () => {
  Alert.alert("Titulo da janela", "Fala parça!");
};

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilos.container}>
        <View style={estilos.cabecalho}>
          <Text style={estilos.texto}>Topo/cabecalho</Text>
        </View>
        <View style={estilos.conteudo}>
          <Text>Conteúdo...</Text>
        </View>
        <View style={estilos.rodape}>
          <Text>Rodapé...</Text>
          <Button title="Botão" onPress={vai} />
        </View>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    // justifyContent: "center",
    // flexDirection: "row",
  },

  cabecalho: {
    backgroundColor: "lightgreen",
    flex: 1,
  },

  conteudo: {
    backgroundColor: "gray",
    flex: 4,
  },

  rodape: {
    backgroundColor: "orange",
    flex: 1,
  },
});
