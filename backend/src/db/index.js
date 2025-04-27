import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    // DB is in another continent baby, be patient
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`\nMongoDB connected, DB HOST: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("Error: ",error);
        process.exit(1);
    }
}

export default connectDB;