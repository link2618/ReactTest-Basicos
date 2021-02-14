
describe('Pruebas en el archivo demo.test.js', () => {
    test('Deben de ser iguales los string', () => {
        // inicializacion
        const mensaje = 'Hola mundo'
    
        // Estimulo
        const mensaje2 = `Hola mundo`
    
        // Observaciones
        expect(mensaje).toBe(mensaje2)
    })
})
