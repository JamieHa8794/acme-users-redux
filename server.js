const { syncAndSeed, models: {User} } = require('./db')
const express = require('express');
const app = express();
const path = require('path')


app.use('/public', express.static(path.join(__dirname,'public')))
app.use('/dist', express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')))

app.get('/api/users', async (req, res, next)=> {
    try{
        const response = await User.findAll();
        res.send(response);
    }
    catch(err){
        next(err)
    }
})

//doenst work yet...
app.post('/api/users', async (req, res, next)=>{
    try{
        res.send(await User.createRandomUser())
    }
    catch(err){
        next(err)
    }
})


const init = async () =>{
    try{
        await syncAndSeed();
        const port = process.env.PORT || 3000;
        app.listen(port, ()=> console.log(`listening on port ${port}`))
    }
    catch(err){
        console.log(err)
    }
}

init();