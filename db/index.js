const db = require('./db')
const User = require('./User')



const syncAndSeed = async () =>{
    try{
        await db.sync({force: true})
        console.log('connected to db')
        const [moe, larry, curly, lucy] = await Promise.all(['moe', 'larry', 'curly', 'lucy'].map(name => User.create({name})))
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {
    db,
    syncAndSeed,
    models:{
        User
    }
}