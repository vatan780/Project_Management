import express from 'express';
import cors from 'cors'

const app = express();

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true , limit:"16kb"}));

app.use(cors({
  origin:process.env.CORS_ORIGIN || "http://locahost:5173" ,
  credentials:true ,
  methods:['GET','POST','PUT','DELETE','OPTIONS'] ,
  allowedHeaders:["Content-Type", "Authorization"]
}))

app.get('/', (req, res) => {
  return res.status(200).json({ 
    message: "Hello world! I am a full stack developer..." 
  });
});

import healthcheckRouter from './routes/healthcheck.routes.js'
import authRouter from "./routes/user.routes.js"

app.use("/api/v1/healthcheck",healthcheckRouter)
app.use("/api/v1/auth",authRouter)

// Use default export consistently
export default app;