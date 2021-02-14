


const nombre   = 'Hugo';
const apellido = 'Carvajalino';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

console.log( nombreCompleto );


export function getSaludo(nombre = 'default') {
    return `Hola ${ nombre }`;
}

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );