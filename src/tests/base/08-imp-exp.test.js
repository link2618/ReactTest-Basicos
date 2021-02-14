import '@testing-library/jest-dom'
import { getHeroeById, getHeroesByOwner } from '../../bases/08-imp-exp'
import heroes from '../../data/heroes'

describe('Puerba de 08-imp-exp', () => {
    test('Prueba de getHeroeById', () => {
        const id = 1
        const heroe = getHeroeById(id)

        const heroeData = heroes.find(h => h.id === id)

        expect(heroe).toEqual(heroeData)
    })

    test('Prueba de getHeroeById si no existe', () => {
        const id = 10
        const heroe = getHeroeById(id)

        expect(heroe).toEqual(undefined)
    })

    test('Prueba de getHeroesByOwner', () => {
        const owner = 'DC'
        const heroe = getHeroesByOwner(owner)

        const heroeData = heroes.filter(h => h.owner === owner)

        expect(heroe).toEqual(heroeData)
    })

    test('Prueba de getHeroesByOwner cantidad', () => {
        const owner = 'Marvel'
        const heroe = getHeroesByOwner(owner)

        expect(heroe.length).toBe(2)
    })
    
})
