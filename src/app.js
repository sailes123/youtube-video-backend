import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'; // Cookie parser is used to perform CRUD operation in browser through server.

const app = express()

// We write .use for middleware porpose

app.use(cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// import routes
import userRouter from './routes/user.routes.js'

//routes declaration 
app.use("/api/v1/users", userRouter)

export { app }
