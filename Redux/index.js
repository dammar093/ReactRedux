import { createStore ,applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger';

// action name constant
const  inc = 'amount/increment';
const  dec = 'amount/decrement';
const incByAmt = 'amount/incementByAmount';

//store
const store = createStore(
   combineReducers({
    amountReducer,
    bonusReducer
   })
  ,applyMiddleware(logger.default));

// reducer
const history=[];

function amountReducer(state={amount:1},action){
  switch(action.type){
    case inc:
      return {amount : state.amount+1}
    case dec:
      return {amount:state.amount - 1}
    case incByAmt:
      return {amount:state.amount + action.payload}
    default: 
      return state
  }
}

function bonusReducer(state={bonus:0},acton){
 switch(acton.type){
   case incByAmt:
     if(acton.payload >= 100)
     return {bonus : state.bonus +1};
    else
    return state;
   default:
     return state;
 }
}

// global state

/*
  store.subscribe(()=>{
    history.push(store.getState())
    console.log(history);
  })
*/

// action creater

function increment(){
  return {type:inc}
}
function decrement(){
  return {type:dec}
}

function incremetByAmount(value){
  return {type : incByAmt,payload:value}
}


setTimeout(()=>{
  // store.dispatch(increment());
  //store.dispatch(decrement());
   store.dispatch(incremetByAmount(200))
},2000)
