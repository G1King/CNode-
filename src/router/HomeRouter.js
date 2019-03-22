import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom';
import List from '@s/views/home/HomeList';
export default class HomeRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" exact render={()=>(<Redirect to="/home"/>)}/>
        <Route path="/home/all" component={List}/>
        <Route path="/home/ask" component={List}/>
        <Route path="/home/share" component={List}/>
        <Route path="/home/job" component={List}/>
        <Route path="/home/dev" component={List}/>
        <Route path="/home/good" component={List}/>
      </Switch>
    )
  }
}
