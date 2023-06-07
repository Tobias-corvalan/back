import fs from 'fs';
//forma sincronica
const contenido = fs.readFileSync('archivosync.txt', 'utf-8');
console.log(contenido);

//forma asincronica

const contenidoasync = fs.readFile('archivoasync.txt', 'utf-8', 
function(error, contenido){
    if(error){
        console.log(error.message);
    }else{
        console.log(contenido);
    }
});