import React, { Component } from "react"
import axios from 'axios'

class App extends Component{
    constructor(){
        super();
        this.state = {
            users: []
        }
    }
    async componentDidMount(){
        const response = (await axios.get('/api/users')).data;
        this.setState({users: response})
    }
    render(){
        const { users } = this.state
        return(
            <div>
                <h2>
                    Acme Users ({users.length})
                </h2>
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
            </div>
        )
    }
    
}

export default App