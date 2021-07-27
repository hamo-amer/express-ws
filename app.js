const express=require('express')
const app=express()


// middleware
const logger=(req,res,next)=>{
    console.table({method:req.method})
    console.table({url:req.url})
    next()
}

app.use(logger)
app.use(express.static('public'))

// app.get('/',(req,res)=>{
   
//     res.sendFile(__dirname+'/public/index.html')
// })
// app.get('/style.css',(req,res)=>{
   
//     res.sendFile(__dirname+'/public/style.css')
// })
// app.get('/service',(req,res)=>{
    
//     res.sendFile(__dirname+'/public/services.html')
// })


const port=5000
app.listen(port,()=>console.log(`server running on port ${port}`))