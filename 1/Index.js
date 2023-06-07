/*
console.log(process.argv)

function LeerOpcion(opcion){
    const index = process.argv.findIndex((item) => item === opcion)
    //console.log(index)
    if(index === -1){
        return false
    }
    return process.argv[index + 1]
}// en consola hay que ingresar node index.js -nombre tobias

console.log(LeerOpcion('-nombre'))


process.stdout.write("Cual es tu nombre? \n") //escribir en consola 

process.stdin.on("data", function(data){
    process.stdout.write(data)
    process.exit()
});//leer de consola

//repaso de como se ingresaba datos en consola y se leia
*/

import {getData, SaveData} from "./readWritePromises.js"
import {PromptUser} from "./PromtUser.js"


const run = async () => {
    const user = await PromptUser()
    const userJson = await getData("./users.json")
    const newUser = [...userJson, user]
    SaveData("./users.json", newUser)
}

run()