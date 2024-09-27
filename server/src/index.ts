import { Hono } from 'hono'
import { cors } from 'hono/cors'
import mongoose from "mongoose"

const app = new Hono()

// Middleware

app.get('/', (c) => {
   return c.text('Server is running.')
})

const connectWithRetry = () => {
   mongoose.connect(process.env.MONGODB_URI!)
      .then(() => console.log("MongoDB Connected."))
      .catch(err => {
         console.log("MongoDB Connection Error: ", err);
         console.log("Retrying in 0.5s second...");
         setTimeout(connectWithRetry, 500);
      });
};

connectWithRetry();

export default app