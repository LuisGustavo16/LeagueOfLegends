import { Text, View, Image } from 'react-native';
import React from 'react';
import { Painel } from './style';

export function Slide1 () {
    const garen = require("../../assets/garen.png")
    return (
        <View style={Painel.container}>
            <Text style={Painel.texto}>GAREN</Text>
            <Image source={garen} style={Painel.imagem}/>
        </View>
    )
}