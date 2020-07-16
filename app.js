const argv = require('./config/yargs').argv;
const colors = require('colors');


// const fs = require('fs'); //libreria que ya existe en node
// const fs = require('express'); //son codigos de otras personas
// const fs = require('./fs'); //requieres de archivos que nosotros creamos en el proyecto

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {

    case 'listar':

        listarTabla(argv.base, argv.limite);



        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado rey: ${archivo.yellow}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
}



// console.log(process)
// console.log(process.argv);
// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]; 
//split = de un string a un arreglo

// console.log('limite', argv.l);