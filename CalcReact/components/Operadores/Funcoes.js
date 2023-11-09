import { StyleSheet, View, Text } from "react-native";

export default function Funcoes({ operador }) {
  return (
    <View style={styles.operadores}>
      <Text style={styles.props}>{operador}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  operadores: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 60,
    height: 60,
    margin: 5
  },

  props: {
    fontSize: 30,
  }
});
