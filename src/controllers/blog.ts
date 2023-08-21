import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

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

const postData = ({ body }: Request, res: Response) => {
    try {
       res.send(body)
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