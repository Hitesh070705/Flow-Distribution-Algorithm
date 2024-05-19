require('dotenv').config()
const express=require("express")
const {connectToMongoDb}=require("./connect")

const distributionRoute=require("./routes/distributionRoutes")

const app=express()
const PORT=process.env.PORT || 8000

connectToMongoDb(process.env.MONGO_URL).then(res=>console.log("Mongodb Connection Successfull !"))

app.use(express.json())

app.use('/api',distributionRoute)

app.listen(PORT , ()=>{
    console.log(`Server started at PORT ${PORT}`)
})