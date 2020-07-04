import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {  connect } from 'react-redux'

export default class Counter extends Component {
 

  render() {
      const {value,onIncreasClick} = this.props;
       console.log('222')
    return (
      <div>
        <span>{value}</span>
        <button onclick={onIncreasClick}></button>
      </div>
    )
  }
}
Counter.propTypes = {
     value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
}