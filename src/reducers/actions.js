
 export const topListAction = {
    update: (data) => {
        return {
            type: 'TOPLIST_UPDATA',
            data:data
        }
    }
}

export const topDetailAction = {
    getDetail:(data)=>{
        console.log('4');
        return {
            type: "Details_SUCC",
            data:data
        }
    }
}
