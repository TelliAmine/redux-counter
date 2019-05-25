
const redux =require('redux');
const createStore=redux.createStore;
//import {createStore} from 'redux'
const initialState={
    counter:0
}

//Reducer

const rootReducer=(state=initialState,action)=>{
    if (action.type==='INC_Counter')
    {
        return{
            ...state,
            counter:state.counter+1
        }
    }
    if (action.type==='ADD_Counter')
    {
        return{
            ...state,
            counter:state.counter+action.value
        }
    }
return state;

}


//Store
const store=createStore(rootReducer);
console.log(store.getState());
// Subscription
store.subscribe(()=>{console.log('[Subscription]',store.getState())})



//Dispatching Action
store.dispatch({type:'INC_Counter'});
store.dispatch({type:'ADD_Counter',value:10});

console.log(store.getState())

