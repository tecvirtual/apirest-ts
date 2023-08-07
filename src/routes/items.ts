import { Router, Request, Response } from "express";
import { deleteData, getAll, getData, postData, updateData } from "../controllers/item";

const router = Router()

/*router.get('/', (req: Request, res: Response) => {
    res.send({ data: "Hola mundo"})
})*/

router.get("/", getAll)
router.get("/:id", getData)
router.post("/", postData)
router.put("/:id", updateData)
router.delete("/:id", deleteData)


export { router }