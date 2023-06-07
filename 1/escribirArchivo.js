import fs from 'fs';


const text = "Escribiendo Archivo asdasdasdassd"

//forma sincronica

fs.writeFileSync('archivosync.txt', text);

const texasync = "Escribiendo Archivo Asincronico hola"

fs.writeFile('archivoasync.txt', texasync, function(error){
    if(error){
        console.log(error);
    }else{
        console.log('Archivo creado');
    }
})

