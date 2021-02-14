import '@testing-library/jest-dom'

import { getSaludo } from "../../bases/02-template-string"

describe('Pruebas en 02-template-string', () => {
    test('Prueba en el metodo getSaludo', () => {
        const nombre = 'Hugo';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe(`Hola ${nombre}`);
    })

    test('Prueba en el metodo getSaludo Sin parametro', () => {
        const saludo = getSaludo();

        expect(saludo).toBe(`Hola default`);
    })
})
