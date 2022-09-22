import React, { Component } from "react"
import axios from 'axios'

import Users from './Users'
import Nav from './Nav';

import store from './store'

class App extends Component{
    constructor(){
        super();
        this.state = store.getState();
    }
    async componentDidMount(){
        const users = (await axios.get('/api/users')).data;
        store.subscribe(()=>{
            this.setState(store.getState())
        })
        store.dispatch({
            type: 'LOAD_USERS',
            users
        })
        store.dispatch({
            type: 'LOADED'
        })
        /*
        this.setState({
            users: response,
            loading: false
        })
        */
    }
    render(){
        const { loading } = this.state
        if(loading){
            return(
                <h2>
                    loading....
                </h2>
            )
        }
        return(
            <div>
                <Nav/>
                <Users/>
            </div>
        )
    }
    
}






export default App