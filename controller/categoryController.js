const {blog,hollywood,fitness}=require("../dummyData")
const bollywoodController=(req,res)=>{
const data=req.query.category
const id=req.query.id
console.log(data,id)
const filterData=blog.filter(item=>item.category==data && item.id==id)
// const 
   return res.send(filterData)   // http://localhost:5000/api/bollywood
}



const hollywoodController=(req,res)=>{
    return res.send("this is our home page")
}

const fitnessController=(req,res)=>{
    return res.send(fitness)
}

module.exports={bollywoodController, hollywoodController, fitnessController} 