import React, { Component } from 'react'
import data from './data.js';
import ViewTemplate from '../templates/View-template.js';
export default class About extends Component {
 

  render() {
    return (
      <div>
        <ViewTemplate data={data}/>
      </div>
    )
  }
}
