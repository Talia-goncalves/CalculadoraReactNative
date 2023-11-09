import { View, Text, StyleSheet } from "react-native";

export default function Numeros({num}){
    return(
        <View style={styles.conjunto}>
            <Text style={styles.num}>{num}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conjunto: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      borderRadius: 10,
      width: 60,
      height: 60,
      margin: 5,
    },
  
    num: {
      fontSize: 30,
    },
  });