import React, { Component } from 'react';
import {
    Card,
    List,
    Avatar
} from "antd";
import {
    Link
} from "react-router-dom";
export default class UserList extends Component {
  render() {
 const {loading,data,title} = this.props;
 console.log(data);
    return (

      <Card title={title}   type = "inner"  loading = {loading}>
      <List loading={loading} itemLayout = "vertical"  className = "userInfoList" dataSource={data} renderItem={item=>{
        return (
                        <List.Item
                            key = {item.id}
                            className="listName"
                        >
                      <Avatar src={item.author.avatar_url}/>
                            <Link className="user" to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>
                            <h4><Link to={"/details/"+item.id}>{item.title}</Link></h4>
                            {item.last_reply_at?<time>{"最后回复: "+item.last_reply_at.split("T")[0]}</time>:""}
                        </List.Item>
                    );
      }}>
      
      </List>
      </Card>
     
    );
  }
}
  
                            
                           