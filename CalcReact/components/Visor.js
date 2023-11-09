import { StyleSheet, View, Text } from "react-native";

export default function Visor({ resultado }) {
  return (
    <View style={styles.visor}>
      <Text style={styles.numero}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  visor: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 270,
    height: 80,
    margin: 5
  },

  numero: {
    fontSize: 30,
  }
});
