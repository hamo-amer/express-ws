const express=require('express')
const app=express()


app.use(express.json())

let users=[
    {
        name:"sarra",
        email:"sarra@gmail.com",
        id:1
    },
    {
        name:"khaled",
        email:"khaled@gmail.com",
        id:2
    }
]

app.get('/users',(req,res)=>{

    res.send({msg:"list of users",users})
})

app.post('/users',(req,res)=>{
users=[...users,req.body]
    res.send({msg:"user added"})
})

app.delete('/users/:ID',(req,res)=>{
    const {ID}=req.params
    users=users.filter(user=>user.id!=ID)
    res.send({msg:"user deleted"})
})
app.put('/users/:ID',(req,res)=>{
    const {ID}=req.params
    users=users.map(user=>user.id==ID ? {...user,...req.body}:user )
    res.send({msg:"user updated",users})
})

app.get('/users/:ID',(req,res)=>{
    const {ID}=req.params
    const user=users.find(el=>el.id==ID)
    res.send({msg:"user",user})
})


const port=5000
app.listen(port,()=>console.log(`server running on port ${port}`))