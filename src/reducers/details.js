export default function detailReducers(state={
    data:{
         reply_count: 0,
             replies: [],
             author: {},
             create_at: ""
    },
    loading:true
},
    actions) {
    switch (actions.type) {
        case 'Details_SUCC':
            
          return {
              data:actions.data,
              loading:false
          }
    
        default:
           return state
    }
}