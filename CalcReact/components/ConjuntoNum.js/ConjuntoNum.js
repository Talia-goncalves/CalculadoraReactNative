import { View, StyleSheet } from "react-native";
import Numeros from "./Numeros";

export default function ConjuntoNum(){
    return(
        <View style={styles.conjunto}>
            <View>
                <Numeros num={1}/>
                <Numeros num={2}/>
                <Numeros num={3}/>
            </View>
            <View>
                <Numeros num={4}/>
                <Numeros num={5}/>
                <Numeros num={6}/>
            </View>
            <View>
                <Numeros num={7}/>
                <Numeros num={8}/>
                <Numeros num={9}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conjunto: {
        justifyContent: "space-between",
        flexDirection: "row"
    },
  });
  