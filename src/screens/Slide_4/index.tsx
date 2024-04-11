import { Text, View, Image } from 'react-native';
import React from 'react';
import { Painel } from './style';

export function Slide4 () {
    const draven = require("../../assets/draven.png")
    return (
        <View style={Painel.container}>
            <Text style={Painel.texto}>DRAVEN</Text>
            <Image source={draven} style={Painel.imagem}/>
        </View>
    )
}