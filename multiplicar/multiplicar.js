const fs = require('fs'); //libreria que ya existe en node
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('=========='.yellow);
    console.log(`tabla de ${base}`.yellow);
    console.log('=========='.yellow);


    for (let i = 1; i <= limite; i++) {

        console.log((`${base} * ${i} = ${base * i}\n`));
    };

}
crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido "${base}" no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += (`${base} * ${i} = ${base * i}\n`);
        };

        //fs.writeFile(carpeta,Nombre[,paramemtroData], callback)
        //fs.writeFile(file,data[,options], callback)
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`)

        });




    })

}

module.exports = {
    crearArchivo,
    listarTabla

}