// how we handle types of actions

// allows to change the name of the time without causing a bug
// import { ADD_BUG, REMOVE_BUG } from './actionTypes';
// or

import * as actions from './actionTypes';
import { produce } from 'immer';

let lastId = 0;

// this reducer is a pure function: if you call it with the same arguments it will always give the same result
// so we ca not:
//      touch DOM elements
//      not gonna work with any global state
//      not gonna make API calls
// so its very easy to test
// how to call APIs will be talked later
export default function reducer(state = [], action){//we set the default state to [] because in the beginning when the state is initially undefined the reducer is called
    
    switch (action.type){
        case actions.ADD_BUG :
            return produce (bug, draftBug => {
                draftBug.id = ++lastId;
                draftBug.description = action.payload.description; //should only have this one since its only the minimal information
                draftBug.resolved = false;
            });
        case actions.REMOVE_BUG : 
            return state.filter(bug => bug.id !== action.payload.id);
        //if its neither of them dispatch the current state else the redux will break
        case actions.RESOLVE_BUG:
            return state.map(bug => bug.id !== action.payload.id ? bug :  produce(bug, draftBug =>{
                draftBug.resolved = true;
            }));
        default:
            return state;
    }
}
    
    
    // igual ao de cima mas em ifs
//     if(action.type === 'ADD_BUG'){
//         return produce (bug, draftBug => {
//         draftBug.id = ++lastId;
//         draftBug.description = action.payload.description; //should only have this one since its only the minimal information
//         draftBug.resolved = false;
//     }}
//    else if(action.type === "REMOVE_BUG"){
//        //return all the bugs except the bug that was removed
//        return state.filter(bug => bug.id !== action.payload.id);
//    }
//     //if its neither of them dispatch the current state else the redux will break
//     return state;

   
    
    // if(action.type === 'ADD_BUG')
    // return[
    //     ...state,
    //     {
    //         id: ++lastId,
    //         description: action.payload.description, //should only have this one since its only the minimal information
    //         resolved: false
    //     }
    // ]

