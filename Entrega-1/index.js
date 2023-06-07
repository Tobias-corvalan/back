import {getData, SaveData} from "./readWritePromises.js"
import {PromptUser} from "./PrompGastos.js"


const run = async () => {
    const user = await PromptUser()
    const userJson = await getData("./gastos.json")
    const newUser = [...userJson, user]
    SaveData("./gastos.json", newUser)
}

run()