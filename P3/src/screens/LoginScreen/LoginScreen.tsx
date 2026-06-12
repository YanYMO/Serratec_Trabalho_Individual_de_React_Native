import React from "react";
import { View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./styles";
import lampada from "../../../assets/lampada.png";
import telefone from "../../../assets/botao-movel.png";
import nuvem from "../../../assets/bloqueio-de-nuvem.png";
import magafone from "../../../assets/megafone.png";
import pendrive from "../../../assets/pendrive-usb.png";
import identidade from "../../../assets/cartao-de-identificacao.png";
import interrogacao from "../../../assets/interrogatorio.png";
import gov from "../../../assets/Gov.png";

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={gov} style={styles.logo} />
        <View style={styles.headerIcones}>
          <Image source={lampada} style={styles.icone} />
          <Image source={magafone} style={styles.icone} />
        </View>
      </View>

      <View style={styles.conteudoContainer}>
        <View style={styles.conteudo}>
          <Text style={styles.titulo}>Identifique-se no gov.br com:</Text>

          <View style={styles.lista}>
            <Image source={identidade} style={styles.icone} />
            <Text style={styles.listaTexto}>Número do CPF</Text>
          </View>

          <Text style={styles.textoAlt}>Digite seu CPF para criar ou acessar sua conta gov.br</Text>

          <View>
            <Text style={styles.titulo}>CPF</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu CPF"
            ></TextInput>
          </View>

          <TouchableOpacity style={styles.botao} activeOpacity={0.8}>
            <Text style={styles.textoBotao}>Continuar</Text>
          </TouchableOpacity>

          <View>
            <Text style={styles.titulo}>Outras opções de identificação:</Text>
            <View style={styles.separador}></View>
          </View>

          <View style={styles.lista}>
            <Image source={telefone} style={[styles.icone, styles.iconeVerde]} />
            <Text style={[styles.listaTexto, styles.textoVerde]}>Login com seu banco</Text>
          </View>

          <View style={styles.lista}>
            <Image source={telefone} style={styles.icone} />
            <Text style={styles.listaTexto}>Seu aplicativo gov.br</Text>
          </View>

          <View style={styles.lista}>
            <Image source={pendrive} style={styles.icone} />
            <Text style={styles.listaTexto}>Seu certificado digital</Text>
          </View>

          <View style={styles.lista}>
            <Image source={nuvem} style={styles.icone} />
            <Text style={styles.listaTexto}>
              Seu certificado digital em nuvem
            </Text>
          </View>

          <View style={styles.listaFooter}>
            <Image source={interrogacao} style={styles.icone} />
            <Text style={[styles.listaTexto, styles.textoAzul]}>
              Está com dúvidas e precisa de ajuda?
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
