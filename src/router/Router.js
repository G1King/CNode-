import React, {
    Component
} from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
// import Bundle from '../untils/Bundle'
import About from '../views/about/About';
import Book from '../views/book/Book';
import IndexHome from '../views/home/Home';
import User from '../views/user/User';
import Details from '../views/details/Detail';
// const AboutWrapper = props => <Bundle load={About} {...props}/>;
// const BookWrapper = props => <Bundle load={Book} {...props}/>;
// const HomeWrapper = props => <Bundle load={Home} {...props}/>;
// const UserWrapper = props => <Bundle load={User} {...props}/>;
// const DetailWrapper = props => <Bundle load={Details} {...props}/>;// <Route path="/detail" component={Details}/>
export default class Router extends Component {
 

  render() {
    return (
    <Switch >
    <Route path = "/"
    exact render = {
        () => <Redirect to = "/home" />
    } /> 
    <Route path="/home" component={IndexHome}/>
    <Route path="/about" component={About}/>
    <Route path="/details/:id" component={Details}/>
    <Route path="/book" component={Book}/>
    <Route path="/user/:id" component={User}/>
    
    </Switch>
    )
  }
}
