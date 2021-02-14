import '@testing-library/jest-dom'
import { retornaArreglo } from '../../bases/07-deses-arr'

describe('Pruebas a 07-deses-arr', () => {
    test('Prueba a retornaArreglo', () => {
        const [ letras, numeros ] = retornaArreglo()

        expect(letras).toEqual( 'ABC' )
        expect(typeof letras).toBe( 'string' )
        expect(numeros).toEqual( 123 )
        expect(typeof numeros).toBe( 'number' )
    })
    
})
