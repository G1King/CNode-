import React, { Component } from 'react'
import {Layout, Row, Col, Menu, Icon, Divider, Button, Dropdown} from "antd";
import {NavLink, Link} from "react-router-dom";
export default class Home extends Component {
 

  render() {
    return (
      <div>
      <Menu className="nav" mode="horizontal">
                        <Menu.Item key="index">
                            <NavLink to="/"><Icon type="home" />首页</NavLink>
                        </Menu.Item>
                        <Menu.Item key="book">
                            <NavLink to="/book"><Icon type="book" />教程</NavLink>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <NavLink to="/about"><Icon type="info-circle-o" />关于</NavLink>
                        </Menu.Item>
                    </Menu>
      </div>
    )
  }
}
