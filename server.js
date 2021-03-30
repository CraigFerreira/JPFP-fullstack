const {syncAndSeed, Campus, Students, campus, students} = require('./db/index.js')
const express= require('express');
const app= express()
const port = process.env.PORT || 3000
const path= require('path');

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

app.get('/api/SingleCampus/:id', async(req, res)=>{
    try{
        console.log(req.params.id)
        // const singleCampus = await Campus.findByPk(req.params.id)
        const singleCampus= await Campus.findAll({where: {id: req.params.id}, include:{model: Students}})
        console.log('single single',singleCampus)
        res.send(singleCampus)

    }catch(err){
        console.log(err)
    }
})


app.get('/api/SingleStudent/:id', async(req, res)=>{
    try{
        const singleStudent = await Students.findAll({where: {id: req.params.id}, include:{model: Campus}})
        res.send(singleStudent)
    }catch(err){
        console.log(err)
    }
})

app.post('/api/campus', async(req, res)=>{
    try{
        console.log('add campus state', req.body)
        const newCampus=await Campus.create({
            name: req.body.campusName,
            address: req.body.campusAddress,
        })
        res.status(201).send(newCampus)
    }catch(err){
        console.log(err)
    }
})

app.post('/api/students', async(req, res)=>{
    try{
        console.log('add student state', req.body)
        const newStudent=await Students.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        })
        
        res.status(201).send(newStudent)
    }catch(err){
        console.log(err)
    }
})

app.delete('/api/campus/:id', async(req, res)=>{
    try{
        console.log('server delete campus', req.params.id)
        await Campus.destroy({where:{id: req.params.id}})
        const updatedCampus= await Campus.findAll()
        res.send(updatedCampus)
    }catch(err){
        console.log(err)
    }
})

app.delete('/api/students/:id', async(req, res)=>{
    try{
        console.log('server delete student', req.params.id)
        await Students.destroy({where:{id: req.params.id}})
        const updatedStudents= await Students.findAll()
        res.send(updatedStudents)

    }catch(err){
        console.log(err)
    }
})

app.put('/api/campus/:id', async(req, res)=>{
    try{
        console.log('campus id of campus to update', req.params.id)
        console.log('campus data to change to', req.body)
        const updateCurrCampus=await Campus.update({name: req.body.campusName, address: req.body.campusAddress},{where:{id: req.params.id}})
        const newCampusList= await Campus.findAll()
        res.send(newCampusList)
    }catch(err){
        console.log(err)
    }
})