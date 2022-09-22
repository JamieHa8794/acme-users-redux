import React, { Component } from 'react'
import store from './store';

class Nav extends Component{
    constructor(){
        super();
        this.state = {
            users: store.getState().users
        }
    }
    render(){
        const { users } = this.state
        return(
            <nav>
                <a href='/home'>Home</a>
                <a href='/users'>Users ({users.length})</a>
            </nav>
        )
    }
}


export default Nav;