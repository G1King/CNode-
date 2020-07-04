import React, { Component } from 'react';
import {List,Avatar,Tag,Col,Pagination,Button} from 'antd';

export default class HomeList extends Component {
handleClick = () => {
 $HTTP.get('https://jsonplaceholder.typicode.com/todos/1').then(v => {
   console.log(v.data)
 })
}
  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>success</Button>
      </div>
    )
  }
}
