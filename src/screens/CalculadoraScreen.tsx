


import React from 'react'
import { Text, View } from 'react-native'
import { Button } from '../components/Button'
import { useCalculadora } from '../hooks/useCalculadora'
import { styles } from '../theme/appTheme'




export const CalculadoraScreen = () => {

    const {
        value,
        lastValue,
        clean,
        handleNumber,
        positivoNegativo,
        deleteNumber,
        dividir,
        multiplicar,
        restar,
        sumar,
        calcular,
    } = useCalculadora();
    
    return (
        <View style={ styles.container }>
            
            {
                ( lastValue !== '0' )
                    && ( <Text style={ styles.resultadoPequeno }>{ lastValue }</Text> )
            }
            
            <Text 
                style={ styles.resultado }
                numberOfLines={ 1 }
                adjustsFontSizeToFit
                >
                { value }
            </Text>

            <View style={ styles.row }>
                <Button text='C' 
                        color='#9b9b9b'
                        action={ clean }/>
                <Button text='+/-' color='#9b9b9b' action={ positivoNegativo }/>
                <Button text='DEL' color='#9b9b9b' action={ deleteNumber }/>
                <Button text='/' color='#ff9427' action={ dividir }/>
            </View>

            <View style={ styles.row }>
                <Button text='7' action={ handleNumber } />
                <Button text='8' action={ handleNumber } />
                <Button text='9' action={ handleNumber } />
                <Button text='x' color='#ff9427' action={ multiplicar }/>
            </View>

            <View style={ styles.row }>
                <Button text='4' action={ handleNumber } />
                <Button text='5' action={ handleNumber } />
                <Button text='6' action={ handleNumber } />
                <Button text='-' color='#ff9427' action={ restar }/>
            </View>

            <View style={ styles.row }>
                <Button text='1' action={ handleNumber } />
                <Button text='2' action={ handleNumber } />
                <Button text='3' action={ handleNumber } />
                <Button text='+' color='#ff9427' action={ sumar }/>
            </View>

            <View style={ styles.row }>
                <Button text='0' ancho action={ handleNumber }/>
                <Button text='.' action={ handleNumber }/>
                <Button text='=' color='#ff9427' action={ calcular }/>
            </View>

        </View>
    )
}
