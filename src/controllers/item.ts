import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { storeData } from "../services/item"

const getData = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
       handleHttp(res, e)
    }
}

const getAll = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
       handleHttp(res, e)
    }
}

const updateData = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
       handleHttp(res, e)
    }
}

const postData = async ({ body }: Request, res: Response) => {
    try {
        const response = await storeData(body)
    } catch (e) {
       handleHttp(res, e)
    }
}

const deleteData = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
       handleHttp(res, e)
    }
}

export { getData, getAll, updateData, postData, deleteData}