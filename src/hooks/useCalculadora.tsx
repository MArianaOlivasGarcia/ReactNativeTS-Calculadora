
import { useRef, useState } from 'react'


enum Operators {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {


    const [value, setValue] = useState('0')
    const [lastValue, setLastValue] = useState('0')

    const lastOperation = useRef<Operators>()

    const clean = () => {
        setValue('0')
        setLastValue('0')
    }

    const handleNumber = ( numberString: string) => {

        // Verificar si existe un punto decimal
        if ( value.includes('.') && numberString === '.' ) return ;

        if ( value.startsWith('0') || value.startsWith('-0') ) {
            
            // Punto decimal
            if ( numberString === '.' ) {
                setValue( value + numberString )

                // Evaluar si es otro cero, y hay un punto
            } else if ( numberString === '0' && value.includes('.')) {
                setValue( value + numberString);
                // Si es diferente de 0 y no hay un punto
            } else if ( numberString !== '0' && !value.includes('.') ){
                setValue( numberString )
                // Evitar 0000.0
            } else if ( numberString === '0' && !value.includes('.') ) {
                setValue( value )
            } else {
                setValue( value + numberString )
            }



        } else {
            setValue( value + numberString )
        }
    
        
    }


    const positivoNegativo = () => {

        if ( value.includes('-') ) {
            setValue( value.replace('-', '') )
        } else {
            setValue('-' + value )
        }

    }


    const deleteNumber = () => {

        let negativo = ''
        let valueTemp = value

        if ( value.includes('-') ) {
            negativo = '-'
            valueTemp = value.substring(1)
        }

        if ( valueTemp.length > 1 ) {
            setValue( negativo + valueTemp.slice(0,-1))
        } else {
            setValue('0')
        }
    }


    const changeLastValue = () => {

        // Quitar el punto si esta al final del numero
        if ( value.endsWith('.') ) {
            setLastValue( value.slice( 0, -1) )
        } else {
            setLastValue( value )
        }

        setValue('0')
    }


    const dividir = () => {
        changeLastValue();
        lastOperation.current = Operators.dividir;
    }

    const multiplicar = () => {
        changeLastValue();
        lastOperation.current = Operators.multiplicar;
    }

    const restar = () => {
        changeLastValue();
        lastOperation.current = Operators.restar;
    }

    const sumar = () => {
        changeLastValue();
        lastOperation.current = Operators.sumar;
    }


    const calcular = () => {

        const value1 = Number( value )
        const value2 = Number( lastValue )

        switch ( lastOperation.current ) {
            case Operators.sumar:
                setValue( `${ value1 + value2 }` )
                break;

            case Operators.restar:
                setValue( `${ value2 - value1 }` )
                break;

            case Operators.multiplicar:
                setValue( `${ value1 * value2 }` )
                break;

            case Operators.dividir:
                setValue( `${ value2 / value1 }` )
                break;
        
        }

        setLastValue('0')

    }

    return {
        value,
        lastValue,
        clean,
        handleNumber,
        positivoNegativo,
        deleteNumber,
        changeLastValue,
        dividir,
        multiplicar,
        restar,
        sumar,
        calcular,
    }
}
