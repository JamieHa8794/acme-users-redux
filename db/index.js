const Sequelize = require('sequelize')
const {STRING} = Sequelize
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_users_db')

const User = db.define('user',{
    name:{
        type: STRING
    } 
    
})


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