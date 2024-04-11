import { Text, View, Image } from 'react-native';
import React from 'react';
import { Painel } from './style';

export function Slide3 () {
    const jinx = require("../../assets/jhinx.png")
    return (
        <View style={Painel.container}>
            <Text style={Painel.texto}>JINX</Text>
            <Image source={jinx} style={Painel.imagem}/>
        </View>
    )
}