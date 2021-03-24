const {syncAndSeed, Campus, Students, campus, students} = require('./db/index.js')
const express= require('express');
const app= express()
const port = process.env.PORT || 3000
const path= require('path')

app.get('/', (req, res, next)=>{res.sendFile(path.join(__dirname, 'client/index.html'))})
app.get('/', (req, res, next)=>{res.sendFile(path.join(__dirname, 'client/style.css'))})
app.use('/src', express.static(path.join(__dirname, 'src')))
app.use('/dist', express.static(path.join(__dirname, 'dist')))
// app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/api/campus', async(req, res)=>{
    try{
        let data= await Campus.findAll({include:{model:Students}})
        console.log('campus data', data)
        res.send(data)
    }catch(err){
        console.log(err)
    }
})

const init= async()=>{
    syncAndSeed()
    app.listen(port, ()=>{
        console.log(`listening on port ${port}`)
    })
}

init()


app.get('/api/students', async(req, res)=>{
    try{
        const data= await Students.findAll({include: {model: Campus}})
        console.log('students data', data)
        res.send(data)

    }catch(err){
        console.log(err)
    }
})

app.get('/api/campus/:id', async(req, res)=>{
    try{
        console.log(req.params.id)

    }catch(err){
        console.log(err)
    }
})