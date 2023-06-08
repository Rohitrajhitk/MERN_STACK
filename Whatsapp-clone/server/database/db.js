import mongoose from 'mongoose';
import dotenv from'dotenv';

dotenv.config();

const Connection = async () =>{
    const user = process.env.DB_USERNAME;
    const password = process.env.DB_PASSWORD;
    const URL = `mongodb+srv://${user}:${password}@cluster0.boazdkp.mongodb.net/?retryWrites=true&w=majority`;
   try {
       await mongoose.connect(URL,{useUnifiedTopology : true});
       console.log("Database connected successfully");
   }catch(error){
        console.log("Error while connecting the database ",error.message);
   } 
}

export default Connection;
