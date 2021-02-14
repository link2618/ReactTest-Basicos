import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from "../../bases/05-funciones"

describe('Pruebas 05-funciones', () => {
    test('Prueba getUser', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()

        expect(user).toEqual(userTest)
    })

    test('Prueba getUsuarioActivo', () => {
        const param = 'Hugo'
        const userTestParam = {
            uid: 'ABC567',
            username: param
        }

        const user = getUsuarioActivo(param)

        expect(user).toEqual(userTestParam)
    })
    
})
