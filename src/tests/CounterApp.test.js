import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp'

describe('Pruebas en counterApp', () => {
    //Se inicializa para no perder el .find() etc...
    let wrapper = shallow( <CounterApp />)

    //Ejecutar antes de cada uno de los text
    beforeEach(() => {
        wrapper = shallow( <CounterApp />)
    })

    test('Debe mostrar <CounterApp /> correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
    test('Debe mostrar el valor de 100', () => {
        const wrapper = shallow( <CounterApp value={100} />)

        const counter = wrapper.find('h2').text().trim()

        expect(counter).toBe('100')
    })

    test('Debe incrementar con el boton +1', () => {
        // Seleccionamos el boton +1 con at
        wrapper.find('button').at(0).simulate('click')

        const counterText = wrapper.find('h2').text().trim()

        expect(counterText).toBe('11')
    })

    test('Debe decrementar con el boton -1', () => {
        // Seleccionamos el boton -1 con at
        wrapper.find('button').at(2).simulate('click')

        const counterText = wrapper.find('h2').text().trim()

        expect(counterText).toBe('9')
    })

    test('Debe Resetear con el boton Reset', () => {
        const valorDefault = 100;
        const wrapper = shallow( <CounterApp value={valorDefault} />)

        // Incrementamos el valor
        wrapper.find('button').at(1).simulate('click')
        wrapper.find('button').at(1).simulate('click')
        // Seleccionamos el boton Reset con at
        wrapper.find('button').at(1).simulate('click')

        const counterText = wrapper.find('h2').text().trim()

        expect(counterText).toBe(`${valorDefault}`)
    })
    
})
