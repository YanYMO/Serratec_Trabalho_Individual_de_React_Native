import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import logo from "./assets/logo.png";
import banner from "./assets/banner.png";

export const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.titulo}> CARTEIRA DE TRABALHO DIGITAL </Text>
      <TouchableOpacity style={styles.botaoLogin}>
        <Text style={styles.textoBotao}> Entrar com </Text>
        <Text style={styles.textoBotaoAlt}>gov.br</Text>
      </TouchableOpacity>
      <Image style={styles.banner} source={banner} />
    </View>
  );
};
