import {
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
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
      <SafeAreaView>
        <View>
          <Text>Topo/cabecalho</Text>
        </View>
        <View>
          <Text>Conteúdo...</Text>
        </View>
        <View>
          <Text>Rodapé...</Text>
          <Button title="Botão" onPress={vai} />
        </View>
      </SafeAreaView>
    </>
  );
}
