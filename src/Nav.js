import React, { Component } from 'react'
import store from './store';
import axios from 'axios'

class Nav extends Component{
    constructor(){
        super();
        this.state = {
            users: store.getState().users
        }
    }
    async createUser(){
        const user = await (axios.post('/api/users')).data
        console.log(user)
    }
    render(){
        const { users } = this.state
        const { createUser } = this
        return(
            <nav>
                <a href='/home'>Home</a>
                <a href='/users'>Users ({users.length})</a>
                <button onClick={ createUser }>Create User</button>
            </nav>
        )
    }
}


export default Nav;