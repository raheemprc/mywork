const mongoose=require("mongoose")

const servicesSubSchema=mongoose.Schema({
   
    title:{type:String,required:true},
    services:[{type:String,required:true}],
    imageSrc:{type:String,required:true}
   
})

const ServicesSubModel=mongoose.model("servicesSub",servicesSubSchema)

module.exports={
    ServicesSubModel
}