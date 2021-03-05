const initState={
    projects:[
        {id:'1',title:'Title1',content:'my first project'},
        {id:'2',title:'Title2',content:'my second project'},
        {id:'3',title:'Title3',content:'my third project'}
    ]
}

const projectReducer=(state=initState,action)=>{
    return state
}
export default projectReducer;