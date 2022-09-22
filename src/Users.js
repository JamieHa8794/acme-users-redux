import React, { Component } from "react"
import store from './store'

class Users extends Component{
    constructor(){
        super();
        this.state = {
            users: store.getState().users
        }
    }
    render(){
        const { users } = this.state
        return(
            <ul>
                {users.length ? 
                users.map((user, idx) =>{
                    return(
                        <li key={idx}>
                            {user.name}
                        </li>
                    )
                })
                : 'No Users Found'
                }
            </ul>
        )
    }
}


        


export default Users