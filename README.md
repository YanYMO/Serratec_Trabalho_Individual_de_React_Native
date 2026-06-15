# 📱 Aventura 1: O Ataque dos Clones — React Native Clone

Trabalho individual do programa **Residência em TIC/Software – Serratec**, desenvolvido com **React Native + Expo**.

## 📌 Sobre o projeto

Clone da tela de login do aplicativo **gov.br**, reproduzindo o layout e os componentes nativos da tela original.

| Tela original | Clone desenvolvido |
|---|---|
| ![Original](./assets/prints/Screenshot_20260612_130204_Chrome.jpg) | *(app rodando no dispositivo)* |

## 🛠️ Tecnologias utilizadas

- [React Native](https://reactnative.dev/) `0.81.5`
- [Expo](https://expo.dev/) `~54.0.34`
- [TypeScript](https://www.typescriptlang.org/) `~5.9.2`
- React `19.1.0`

## ✅ Requisitos implementados

- **TypeScript** — todos os arquivos em `.tsx` / `.ts`
- **`Image`** — logotipo gov.br e ícones da interface
- **`Text`** — títulos, descrições e textos dos botões
- **`TextInput`** — campo de entrada do CPF
- **`View`** — estrutura e layout de todos os elementos
- **`StyleSheet`** — estilos em arquivo `styles.ts` separado do componente
- **Imagem de referência** — screenshots do app original em `assets/prints/`

## 📁 Estrutura do projeto

```
P3/
├── assets/
│   ├── prints/           ← screenshots do app original (referência)
│   ├── Gov.png
│   ├── lampada.png
│   ├── megafone.png
│   └── ...               (demais ícones)
├── src/
│   └── screens/
│       ├── LoginScreen/
│       │   ├── LoginScreen.tsx   ← tela principal (ativa)
│       │   └── styles.ts
│       └── MenuScreen/
│           ├── MenuScreen.tsx    ← tela bônus (Carteira de Trabalho Digital)
│           └── styles.ts
├── App.tsx
├── index.ts
├── app.json
├── tsconfig.json
└── package.json
```

## 🚀 Como executar

**Pré-requisitos:** Node.js e Expo Go instalado no celular (ou emulador Android/iOS)

```bash
# Clone o repositório
git clone https://github.com/YanYMO/Serratec_Trabalho_Individual_de_React_Native.git

# Acesse a pasta do projeto
cd Serratec_Trabalho_Individual_de_React_Native/P3

# Instale as dependências
npm install

# Inicie o servidor Expo
npm start
```

Escaneie o QR Code com o **Expo Go** (Android) ou a câmera (iOS).

## 👤 Autor

**Yan Martins de Oliveira**  
Residência em TIC/Software – Serratec  
GitHub: [@YanYMO](https://github.com/YanYMO)