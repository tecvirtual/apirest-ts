import { Schema, Types, model, Model } from "mongoose"
import { Car } from "../interfaces/car.interface"

const DataSchema = new Schema<Car>(
    {
        name: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        fuel: {
            type: String,
            enum: ['gasoline', 'electric']
        },
        year: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const ItemModel = model('items', DataSchema);

export default ItemModel;
