// how we dispatch types of actions
import * as actions from './actionTypes';

// allows to write more concise code
// allows to change the code of the action easily

export const addBug = description => ({
    type: actions.ADD_BUG,
    payload:{
        description //  =  description: description
    }
});

export const resolveBug = id => ({
    type:actions.RESOLVE_BUG,
    payload:{
        id // =  id:id
    }
})

// export const resolveBug = (bug, bugDraft =>{
//     bugDraft.resolved = true;
// });


// export function addBug(description){
//     return{
//         type: actions.ADD_BUG,
//         payload:{
//             description: description
//         }
//     }
// }