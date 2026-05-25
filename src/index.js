
import dotenv from 'dotenv';
dotenv.config()
import app from './app.js';
import connectDB from './db/index.js';

let PORT = process.env.PORT || 4000

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`)
        })
    })
    .catch((err)=>{
        console.error("MongoDb Connection Error", err);
        process.exit(1);
    })



