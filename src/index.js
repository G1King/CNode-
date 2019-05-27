import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import $HTTP from './untils/httpRequest/RequestTool';
import App from './App';
import "./index.css";
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {
    createStore,
    applyMiddleware
} from "redux";
import thunk from "redux-thunk";
import reducers from './reducers/reducers'
const store = createStore(reducers,applyMiddleware(thunk))
window.$HTTP = $HTTP;
ReactDOM.render(
   <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/** 
 * 
 * 
 * // import React from 'react';
 // import ReactDOM from 'react-dom';
 // import App from './App';
 // import registerServiceWorker from './registerServiceWorker';
 // import {BrowserRouter} from "react-router-dom";
 // import {createStore,applyMiddleware} from "redux";
 // import thunk from "redux-thunk";
 // import {Provider} from "react-redux";
 // import reducer from "./reducers/index";
 // const store = createStore(reducer,applyMiddleware(thunk));

 // ReactDOM.render(
 //     <BrowserRouter>
 //         <Provider store={store} >
 //         <App />
 //         </Provider>
 //     </BrowserRouter>
 //     , document.getElementById('root'));
 // registerServiceWorker();
 import React, {
     Component
 } from 'react'
 import PropTypes from 'prop-types'
 import ReactDOM from 'react-dom'
 import {
     createStore,
     bindActionCreators
 } from 'redux'
 import {
     Provider,
     connect
 } from 'react-redux'

 // React component
 class Counter extends Component {
     render() {
         const {
             value,
             onIncreaseClick,
             onReudecClick
         } = this.props
         console.log(this.props);
         return ( <
             div >
             <
             span > {
                 value
             } < /span> <
             button onClick = {
                 onIncreaseClick
             } > Increase < /button> <
             button onClick = {
                 onReudecClick
             } > reduce < /button> <
             /div>
         )
     }
 }

 Counter.propTypes = {
     value: PropTypes.number.isRequired
     //   onIncreaseClick: PropTypes.func.isRequired
 }

 // Action
 const increaseAction = {
     type: 'increase'
 }
 const reduceAction = {
     type: 'reduce'
 }

 // Reducer
 function counter(state = {
     count: 0
 }, action) {
     const count = state.count
     switch (action.type) {
         case 'increase':
             return {
                 count: count + 1
             }

             case 'reduce':

                 return {
                     count: count - 1
                 }
                 default:
                     return state
     }
 }

 // Store
 const store = createStore(counter)

 // Map Redux state to component props
 // function mapStateToProps(state) {
 //   return {
 //     value: state.count
 //   }
 // }
 const mapStateToPropsCreator = (state) => {
     return {
         value: state.count
     }
 };
 const mapStateToProps = (initstate, ownprops) => {

     return mapStateToPropsCreator;
 };

 // // Map Redux actions to component props
 // function mapDispatchToProps(dispatch) {
 // //   return {
 // //     onIncreaseClick: () => dispatch(increaseAction)

 // //   }
 // return bindActionCreators({
 //    onIncreaseClick: increaseAction
 // }, dispatch)
 // }
 // mapDispatchToProps 多种写法 1
 // const mapDispatchToProps = (dispatch)=>{
 // return {
 //     onIncreaseClick: () => dispatch(increaseAction)
 // }
 // }
 // mapDispatchToProps 多种写法 2
 // const faActionCreators = {
 //     onIncreaseClick:()=>{
 //      return increaseAction
 //     }
 // }
 // const mapDispatchToProps = faActionCreators;

 // mapDispatchToProps 多种写法 3
 const faActionCreators = {
     onIncreaseClick: () => {
         return increaseAction
     }
 }
 const reduceCrators = {
     onReudecClick: () => {
         return reduceAction
     }
 }
 
 const mapDispatchToProps = (dispatch) => {
     return bindActionCreators({
         ...faActionCreators,
         ...reduceCrators
     }, dispatch)
 };
 // Connected Component
 const App = connect(
     mapStateToProps,
     mapDispatchToProps
 )(Counter)

 ReactDOM.render( <
     Provider store = {
         store
     } >
     <
     App / >
     <
     /Provider>,
     document.getElementById('root')
 )
 * 
*/