

import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


interface Props {
    action: ( numberString: string ) => void;
    text: string;
    color?: string;
    ancho?: boolean;
}


export const Button = ({ text, color = '#2d2d2d', ancho = false, action }: Props) => {
    return (
        <TouchableOpacity
            onPress={ () => action( text ) }>
            <View style={{
                    ...styles.boton,
                    backgroundColor: color,
                    width: ancho ? 160 : 70
                }}>
                <Text style={{
                        ...styles.botonText,
                        color: (color === '#9b9b9b') ? '#1d1d1d' : 'white'
                    }}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    boton: {
        height: 70,
        width: 70,
        backgroundColor: '#2d2d2d',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    botonText: {
        textAlign:'center',
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    }
})