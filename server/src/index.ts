import { Hono } from 'hono'
import { connectDB } from './config/database'
import routes_auth from './routes/auth'

const app = new Hono()

// Connect to database
connectDB();

// Middleware

app.get('/', (c) => c.text('Server is running.'))

app.route("/auth", routes_auth)

export default app