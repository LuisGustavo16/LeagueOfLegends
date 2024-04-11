import { StyleSheet } from "react-native";

export const Painel = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d5d1fe"
    },
    imagem: {
        height: 350,
        width: 240,
    },
    texto: {
        fontSize: 40,
        fontWeight: "800",
        color: "white",
        fontStyle: "italic",
    }
})