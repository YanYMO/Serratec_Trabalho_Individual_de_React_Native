import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center",
    padding: 25,
    gap: 60
  },
  logo: {
    marginHorizontal: "auto",
    width: 240,
    height: 260
  },
  titulo: {
    color: "#012f7b",
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: "auto"
  },
  botaoLogin: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    padding: 10,
    paddingBottom: 8,
    backgroundColor: "#0163ff"
  },
  textoBotao: {
    color: "#fff",
    fontSize: 20,
  },
  textoBotaoAlt: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlignVertical: "top",
  },
  banner: {
    width: 330,
    height: 100
  }
});
