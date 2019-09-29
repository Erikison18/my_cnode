import React, {Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

import Index from '../view/index/index'
import Book from '../view/book/index'
import About from '../view/about/index'
import Details from '../view/details/index'
import User from '../view/user/index'

class RouterIndex extends Component{
    render() {
        return (
            <Switch>
                <Route path="/" exact render={()=> (
                    <Redirect to="/index/all"></Redirect>
                )}></Route>
                <Route path="/index/:id" component={Index}></Route>
                <Route path="/book" component={Book}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/details/:id" component={Details}></Route>
                <Route path="/user/:id" component={User}></Route>
            </Switch>
        )
    }
}

export default RouterIndex
