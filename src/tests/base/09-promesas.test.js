import '@testing-library/jest-dom'
import { getHeroeByIdAsync } from '../../bases/09-promesas'
import heroes from '../../data/heroes'

describe('Pruebas con promesas', () => {
    // done para tareas asyncronas
    test('pruebas de getHeroeByIdAsync con heroe que existe', (done) => {
        const id = 1

        getHeroeByIdAsync(id)
        .then(heroe => {
            expect(heroe).toBe(heroes[0])
            done()
        })
    })

    test('pruebas de getHeroeByIdAsync con heroe que no existe', (done) => {
        const id = 10

        getHeroeByIdAsync(id)
        .catch(err => {
            expect(err).toBe('No se pudo encontrar el héroe')
            done()
        })
    })
    
})
