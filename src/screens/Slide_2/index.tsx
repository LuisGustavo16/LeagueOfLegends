import { Text, View, Image } from 'react-native';
import React from 'react';
import { Painel } from './style';

export function Slide2 () {
    const ashe = require("../../assets/ashe.png")
    return (
        <View style={Painel.container}>
            <Text style={Painel.texto}>ASHE</Text>
            <Image source={ashe} style={Painel.imagem}/>
        </View>
    )
}