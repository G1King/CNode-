import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";
import {
    Card,
    List,
    Avatar
} from "antd";
export default class replies extends Component {
    render() {
        const {reply_count,replies,loading} = this.props;
        return (
            <Card title={reply_count + '回复'} type="inner">
            <List 
            dataSource={replies} loading={loading} itemLayout="vertical" renderItem={item=>{
                return (
            <List.Item   key={item.id} extra={item.ups.length>0?(<span>有{item.ups.length}个人赞了这条回复</span>):""}>

            <List.Item.Meta avatar={<Avatar src={item.author.avatar_url}/>} description={<span><Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link> 发表于: {item.create_at.split("T")[0]}</span> }/>
                       <div dangerouslySetInnerHTML={
                                    {
                                        __html: item.content
                                    }
                                }>

                                </div>
            </List.Item>
                );
            }}>
            
            </List>
            </Card>
                
        )
    }
}
