import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from "axios";
import {
  bindActionCreators
} from 'redux'
import {topDetailAction} from '../../reducers/actions.js'
import {
  Card,
  Tag,
  Avatar
} from 'antd'
import Replies from './replies.js'
import {Link} from 'react-router-dom'
const tabSchema = {
  all: '全部',
  good: '精华',
  share: '分享',
  ask: '问答',
  job: '招聘',
  dev: '测试',
};
 class Detail extends Component {
 constructor(props) {
   super(props);
   let id = this.props.match.params.id;
   this.state = {
     id,
     data:this.props.data,
      loading: this.props.loading
   }
   this.update(id)
 }
  componentWillReceiveProps(nextProps) {
   
    this.setState({
      data: nextProps.data,
      loading: nextProps.loading
    })
  }
  update(id){
   
    axios.get('https://cnodejs.org/api/v1/topic/' + id).then(r => {
      console.log('2');
    this.props.getDetail(r.data.data)
    })
  }
  render() {
    const {data,loading} = this.state;


     const title = (<div>
    <h2>{data.title}</h2>
    <div style={{display:"flex",alignItems:"center"}}>
     < Tag color = {
       data.top ?
       'magenta' : data.good ?
         'green' : 'geekblue'
     } >
     {
       data.top ? '置顶' : data.good ? '精华' : tabSchema[data.tab] ? tabSchema[data.tab] : '分享'
     }
     </Tag>
     <Avatar src={data.author.avatar_url} style={{margin:"0 5px"}} size="small" />
                    <Link to={"/user/"+data.author.loginname}>{data.author.loginname}</Link>
                    <span style={{marginLeft:"5px"}}>发表于：{data.create_at.split("T")[0]}</span>
    </div>
    
    </div>)
    return (
      <div className="mainWrap"> 
      {
    
          <Card title={title} loading={loading}>
          <div dangerouslySetInnerHTML={
            {
              __html :data.content
            }
          }>
          </div>
          <Replies reply_count={data.reply_count} replies={data.replies} loading={loading}></Replies>
          </Card>
      }
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...topDetailAction
  }, dispatch)
};
export default connect((state) => (state.detail), mapDispatchToProps)(Detail)