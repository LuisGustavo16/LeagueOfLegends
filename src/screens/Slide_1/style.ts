import { StyleSheet } from "react-native";

export const Painel = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3472fe"
    },
    imagem: {
        height: 350,
        width: 200,
    },
    texto: {
        fontSize: 40,
        fontWeight: "800",
        color: "white",
        fontStyle: "italic",
    }
})