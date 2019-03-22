import React, { Component } from 'react'
import {Layout, Row, Col, Menu, Icon, Divider, Button, Dropdown} from "antd";
import {NavLink, Link} from "react-router-dom";
import HomeRouter from '../../router/HomeRouter';
const subNavs = [
 {
   item: "全部",
   path: "/home/all"
 }, {
   item: "精华",
   path: "/home/good"
 }, {
   item: "问答",
   path: "/home/ask"
 }, {
   item: "分享",
   path: "/home/share"
 }, {
   item: "招聘",
   path: "/home/job"
 }, {
   item: "测试",
   path: "/home/dev"
 }
];
export default class Home extends Component {
  render() {
    return (
      <Row className="mainWrap">
       <Col md={6} xs={24}>
         <nav className="subNav">
            {subNavs.map((item,index)=>{
              return <NavLink to={item.path} key={index} activeClassName="active">{item.item}</NavLink>
            })}
         </nav>
       </Col>
        <HomeRouter/>
      </Row>
    )
  }
}
