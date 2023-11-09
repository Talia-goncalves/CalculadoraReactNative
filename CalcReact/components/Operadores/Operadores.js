import { StyleSheet, View, Text } from "react-native";
import Funcoes from "./Funcoes";

export default function Operadores({ operador }) {
  return (
    <>
      <Funcoes operador="/" />
      <Funcoes operador="*" />
      <Funcoes operador="-" />
      <Funcoes operador="+" />
      <Funcoes operador="=" />
    </>
  );
}

const styles = StyleSheet.create({
  operadores: {
    alignItems: "center",
    flexDirection: 'column',
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 60,
    height: 60,
    margin: 5,
  },

  props: {
    fontSize: 30,
  },
});
