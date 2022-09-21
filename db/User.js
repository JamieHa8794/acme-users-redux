const db = require('./db')
const {STRING} = db.Sequelize

const User = db.define('user',{
    name:{
        type: STRING
    } 
    
})



module.exports = User
 