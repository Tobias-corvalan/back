import fs from "fs";


export const getData = (file) => {
    return new Promise((resolve, reject)=>{
        fs.readFile(file, "utf-8", (error, data)=>{
            if(error){
                reject(error)
            }
            resolve(JSON.parse(data))
        })
    })
}

export const SaveData = (file, newData) =>{
    return new Promise((resolve, reject)=>{
        fs.writeFile(file,JSON.stringify(newData), (error)=>{
            if(error){
                reject(error)
            }else{
            resolve("Se guardo correctamente")
            }
        })
    })
}