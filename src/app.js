import express from 'express';

const app = express();

// Middlewares can go here (e.g., express.json())

app.get('/', (req, res) => {
  return res.status(200).json({ 
    message: "Hello world! I am a full stack developer..." 
  });
});

// Use default export consistently
export default app;