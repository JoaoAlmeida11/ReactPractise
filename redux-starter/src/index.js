// there is a more modern way of writing the redux code that is very clean an concise 
// however its not in the free version of this tutorial
// https://youtu.be/poQXNp9ItL4

import store from './store';
// import * as actions from './actionTypes';
// the above line is not need because its only used in the actionCreators.js
import { addBug, resolveBug } from './actionCreators';


// store.subscribe
// gets called every time the state of the store gets changed
// this is done in the UI layer
//      react: whenever the state of the store changes we want to re-render the UI 
//             UI components should subscribe to the store so that they re-render
// subscribe returns a function to unsubscribe from the store
//      if the user navigates away from the current page; and the new page doesn't have that UI component we don't want it to remain subscribed to the store; since if it stays it will cause memory leaks
const unsubscribe = store.subscribe(()=>{
    console.log('Store changed!', store.getState());
});


// we get notified from the store.subscribe
store.dispatch(addBug("Bug1"));
store.dispatch(resolveBug(1))

unsubscribe();

// we do not get notified from the store.subscribe
// source code of dispatch
//      state = reducer(state, action);
//      notify the subscribers
store.dispatch({
    type: actions.REMOVE_BUG,
    payload:{
        id: 1
    }
})

console.log(store.getState());