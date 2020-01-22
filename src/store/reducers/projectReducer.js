
const initState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'blah vla blah'},
        {id: '2', title: 'colect all the stars', content: 'slah sla blah'},
        {id: '3', title: 'egg hunt with maverick', content: 'glah vla glah'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            // console.log('created project', action.payload);
            break
        default :
            // console.log('project not created');
            break
    }
    return state
}

export default projectReducer;