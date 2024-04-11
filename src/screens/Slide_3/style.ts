import { StyleSheet } from "react-native";

export const Painel = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ff80ea"
    },
    imagem: {
        height: 350,
        width: 250,
    },
    texto: {
        fontSize: 40,
        fontWeight: "800",
        color: "white",
        fontStyle: "italic",
    }
})