import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js'


// Database connection function
//Always use async/await with mongoose connection to handle connection properly (databse in different continent may take time to connect)
const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`\n mongo Db connected : ${connectionInstance.connection.host}`);
    }catch(err){
        console.log("MONGO_URI:", process.env.MONGO_URI);
        console.log(`\n error in connecting to mongo Db : ${err.message}`);
        process.exit(1);
        
    }
}


export default connectDB