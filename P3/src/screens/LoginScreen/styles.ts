import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
  },
  icone: {
    width: 20,
    height: 20,
    tintColor: "#1550b4",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 40,
    elevation: 5,
    overflow: "visible",
  },
  headerIcones: {
    flexDirection: "row",
    padding: 10,
    gap: 30,
  },
  logo: {
    width: 110,
    height: 40,
  },
  conteudoContainer: {
    padding: 30,
  },
  conteudo: {
    padding: 12,
    height: 700,
    backgroundColor: "#fff",
    flexDirection: "column",
    elevation: 5,
    overflow: "visible",
    gap: 25,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lista: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  listaFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginTop: 100,
  },
  listaTexto: {
    fontSize: 14,
  },
  textoAlt: {
    fontSize: 12,
  },
  input: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 6,
    backgroundColor: "#fbf7b9",
  },
  botao: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    padding: 10,
    paddingBottom: 8,
    backgroundColor: "#1550b4",
    elevation: 4,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 20,
  },
  separador: {
    backgroundColor: "#b3b3b3",
    height: 2,
    marginTop: 5,
  },
  iconeVerde: {
    tintColor: "#348949",
  },
  textoVerde: {
    color: "#348949",
  },
  textoAzul: {
    color: "#1550b3",
  }
});
