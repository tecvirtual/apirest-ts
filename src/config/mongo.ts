import "dotenv/config";
import { connect } from "mongoose";

async function dbConnect(): Promise<void> {
    try {
        const uri_db = <string>process.env.DB_URI
        await connect(uri_db);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export default dbConnect;