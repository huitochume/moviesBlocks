import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import mongoose from 'mongoose'
import router from './routes/index'

const app = express()

//DB Connection MongoDB
const DBURL = 'mongodb+srv://block57:b123456@cluster0.7p1xt.mongodb.net/restaurants?retryWrites=true&w=majority'
mongoose.Promise=global.Promise
mongoose.connect(DBURL, {useUnifiedTopology: true, useCreateIndex:true, useNewUrlParser: true})
.then(() => console.log("Connected on port 27017..."))
.catch(ex => console.log("An error occured: ",ex))

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "public")))

app.use('/api',router)

app.set("port",process.env.PORT || 3000)
const port=app.get("port")

app.listen(port, () => {
    console.log("server on ",port);
})