import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`
const router = Router()

/**
 * 
 * @returns
 */

const cleanFileNme = (fileName : String) => {
    const file = fileName.split('.').shift()
    return file
}

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileNme(fileName)
    if(cleanName !== 'index'){
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log('Cargando las rutas: ' + cleanName)
            router.use(`/${cleanName}`, moduleRouter.router)
        })
    }
})



export { router }
