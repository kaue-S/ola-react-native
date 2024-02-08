import { StyleSheet } from "react-native";

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
    justifyContent: "center",
    alignItems: "center",
  },

  conteudo: {
    backgroundColor: "gray",
    flex: 4,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  rodape: {
    backgroundColor: "orange",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  texto: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontStyle: "italic",
    margin: "auto",
  },
});

export default estilos;
