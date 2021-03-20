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

app.get('/api/data', async(req, res)=>{
    try{
        let data= await Campus.findAll({include:{model:Students}})
        console.log('campus data', data)
        res.send(data)
    }catch(err){
        console.log(err)
        next(err)
    }
})

const init= async()=>{
    syncAndSeed()
    app.listen(port, ()=>{
        console.log(`listening on port ${port}`)
    })
}

init()



// app.get('/api/data', async(req, res)=>{
//     try{
//         const authors=await Author.findAll({include: [{model: Book}]})
//         console.log(authors)
//         res.send(authors)
//     }catch(err){
//         console.log(err)
//     }
// })

// app.delete('/api/authors/:id', async(req, res)=>{
//     const {id}= req.params
//     console.log('delete id', id)
//   try{
//     await Author.destroy({where:{id: id}})

//   }catch(err){
//       console.log(err)
//   }
// })