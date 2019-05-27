export default function topList(state={
    data:{},
    loading:true
},actions){
    switch (actions.type) {
        case 'TOPLIST_UPDATA':
            return {
                data:actions.data,
                loading:false
            };
           
    
        default:
            return {state}
            
    }
};
