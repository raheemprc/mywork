const  express=require("express")
const Connect=require("./Config/Config")
const app=express()
const {ServicesSub} = require("./Route/ServicesSub")
const {Event} =require("./Route/EventBooking")
const {UsersRoute}=require("./Route/Users")
const {AdminRoute}=require("./Route/Admin")
const cors=require("cors")
app.use(express.json())
app.use(
    cors({
        origin:"*",
    })
) 

app.use("/service",ServicesSub)
app.use("/event",Event)
app.use("/users",UsersRoute)
app.use("/admin",AdminRoute)

app.listen(8080,async(req,res)=>{
    try{
     await Connect
     console.log("Server Running PORT 8080")
    }
    catch{
        console.log("Server Error")
    }
}) 