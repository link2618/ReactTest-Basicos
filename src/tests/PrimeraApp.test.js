import React from 'react'
import '@testing-library/jest-dom'
// import { render } from '@testing-library/react'
import PrimeraApp from '../PrimeraApp'
import { shallow } from 'enzyme'

describe('Pruebas de Primera App', () => {
    // test('Debe mostrar el mensaje "Hola mundo"', () => {
        // const saludo = "Hola mundo"
        // const wrapper = render(<PrimeraApp saludo={saludo}/>)

        // expect(wrapper.getByText(saludo)).toBeInTheDocument()
    // })
    test('Debe mostrar el mensaje "Hola mundo"', () => {
        const saludo = "Hola mundo"
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>)

        expect(wrapper).toMatchSnapshot()
    })

    test('Debe mostrar el subtitulo cuando se envia', () => {
        const saludo = "Hola mundo"
        const subtitulo = 'Soy el subtitulo enviado'

        const wrapper = shallow(
        <PrimeraApp saludo={saludo} subtitulo={subtitulo}/>
        )

        // Se pone p por que estamos buscando la etiqueta p
        const textoParrafo = wrapper.find('p').text()

        expect(textoParrafo).toBe(subtitulo)
    })
        
})
