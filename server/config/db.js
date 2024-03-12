import mongoose, { mongo } from "mongoose";

const ConnectDb=async()=>{
    try{
        const connc=await mongoose.connect(process.env.MONGO_URO,{
            useUnifiedTopology:true
        });
        console.log('Mongodb Succesfully Connected:${connc.connection.host)'.cyan.underline);
    }catch(error){
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}