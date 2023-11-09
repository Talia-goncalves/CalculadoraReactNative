import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Operadores from "./components/Operadores/Operadores";
import ConjuntoNum from "./components/ConjuntoNum.js/ConjuntoNum";
import Funcoes from "./components/Operadores/Funcoes";
import Visor from "./components/Visor";


export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.visor}>
      <Text style={styles.nome}>Calculadora</Text>
      <Visor resultado={0}/>
    </View>
      <View>
        <View style={styles.ponto}>
          <Funcoes operador={"AC"} style={styles.ac}/>
          <Funcoes operador={"DEL"} style={styles.ac}/>
          <Funcoes operador={"%"} style={styles.ac}/>
        </View>
        <View>
          <ConjuntoNum/>
        </View>
        <View style={styles.ponto}>
          <Funcoes operador={0}/>
          <Funcoes operador={"."}/>
          <Funcoes operador={"+/-"}/>
        </View>
      </View>
      <View>
        <Operadores style={styles.operadores}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3b475d",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom:-150
  }, 
  ponto:{
    flexDirection:'row'
  },
  visor:{
    marginTop:-530,
    marginEnd: -280,
  },
  nome:{
    fontSize: 40,
    color: "#fff",
    alignSelf: "center",
    marginBottom: 20
  }
});
