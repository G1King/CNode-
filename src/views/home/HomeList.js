import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
  bindActionCreators
} from 'redux'
import {List,Avatar,Tag,Col,Pagination} from 'antd';
import {Link} from 'react-router-dom';
import {topListAction} from '../../reducers/actions.js'
import $HTTP from '../../untils/httpRequest/RequestTool';
const tabSchema = {
  all: '全部',
  good: '精华',
  share: '分享',
  ask: '问答',
  job: '招聘',
  dev: '测试'
};
 class HomeList extends Component {
  constructor(props) {
    super(props);
    let path = this.props.location.pathname.split('/');
    console.log(this.props);
    this.state = {
       tab:path[path.length -1],
       page:1,
         loading: this.props.loading,
           data: this.props.data,
    }
  }
  componentDidMount = () => {
    const {tab,page} = this.state;
    this.updata(tab,page);
  }
   componentWillReceiveProps(nextProps){
   let path = nextProps.location.pathname.split('/')
   const tab = path[path.length-1];
   if (tab !== this.state.tab) {
      this.setState({
        tab,
        page: 1
      });
     this.updata(tab,1)
     return false;
   }
   this.setState({
     data:nextProps.data,
      loading: nextProps.loading
   })

   }
  updata(tab,page){
      $HTTP.get('https://cnodejs.org/api/v1/topics?tab=' + tab + '&limit=20&page=' + page).then(res=>{
this.props.update(res.data.data)
      })
  }
handleClick = () => {
console.log(this.props);
}
handleClick1 = () => {
  console.log(this.props);
 
}
  render() {
    console.log(this.state);
    const {data,page} = this.state;
    return (
    <Col md={18} xs={24} className="indexList">
     <List dataSource={data} renderItem={item=>{
       return (
         <List.Item key={item.id} actions={[<span style={{marginLeft:"35px"}}>回复{item.reply_count}</span>,<span>访问{item.visit_count}</span>]}>
           <List.Item.Meta  style={{minWidth:"200px"}} avatar={<Avatar src={item.author.avatar_url} />} title={
            (<div>
            <Tag color={item.top ? 'magenta' : item.good ? 'green' :'geekblue'}>   { item.top ? '置顶' : item.good ? '精华' : tabSchema[item.tab] ? tabSchema[item.tab] : '分享' } </Tag>
             <Link to={"/details/"+item.id}>{item.title}</Link>
              </div>)}
            description={<span><Link to={'/user/'+item.author.loginname}>{item.author.loginname}</Link>发表于{item.create_at.split('T')[0]}</span>}
            />
         </List.Item>
       )
     }}>
     
     </List>
     {(data &&data.length>0)?(<Pagination defaultCurrent={page} total={data.length}></Pagination>):''}
    </Col>
    )
  }
}
// const mapStateToProps = state => {
//   return state.topList
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     update: (data) => dispatch({
//       type: 'TOPLIST_UPDATA',
//       data: {
//         ley: data
//       }
//     })
//   }
// }
// const actionors = {
//   update:(data) => {
//  return {
//          type: 'TOPLIST_UPDATA',
//          data: {
//            ley: data
//          }
//        }
//   }
// }
const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({
    ...topListAction
  },dispatch)
};
export default connect((state) => (state.topList), mapDispatchToProps)(HomeList)