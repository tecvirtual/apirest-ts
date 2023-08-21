import { Car } from "../interfaces/car.interface"
import ItemModel from "../models/item"

const storeData = async (data: Car) => {
    const responseData = await ItemModel.create(data)
}

export { storeData }