export default function userReducer(state={ 
    data:{
         loginname: "",
             avatar_url: "",
             score: 0,
             create_at: "",
             recent_topics: [],
             recent_replies: []
    },
    
    loading:true
},actions) {
  switch (actions.type) {
      case "USER_UPDATE_SUCCESS":   
          
       return {
           data:actions.data,
           loading:false
       }
  
      default:
          return state;
  }    
}