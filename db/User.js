const db = require('./db')
const {STRING} = db.Sequelize
const faker = require('faker')

const User = db.define('user',{
    name:{
        type: STRING
    } 
    
})

User.createRandomUser = function () {
    const name = faker.name.firstName();
    return this.create({name: name})
}

module.exports = User
 