import { Hono } from 'hono'
import { connectDB } from './config/database'

const app = new Hono()

// Middleware

app.get('/', (c) => {
   return c.text('Server is running.')
})

connectDB();

export default app