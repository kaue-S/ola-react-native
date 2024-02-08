import {
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";
import estilos from "./src/stylesheets/estilos";

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
          <Text style={estilos.texto}>Conteúdo...</Text>
        </View>
        <View style={estilos.rodape}>
          <Text style={estilos.texto}>Rodapé...</Text>
          <Button title="Botão" onPress={vai} />
        </View>
      </SafeAreaView>
    </>
  );
}
