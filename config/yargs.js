const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    //aca empieza el yargs
    //comandos
    .command('listar', 'Imprime la tabla de multiplicar', options)
    .command('crear', 'Crea la tabla de multiplicar', options)
    //help se utiliza en la terminal para consultar las acciones posibls dentro de la app
    // ej: node app --help /Muestra la lista de comandos
    // node app listar --help /Muestra la lista de comandos de el comando listar
    .help()
    .argv; //requireds

module.exports = {
    argv
}