useReducer hook in react :

1. useReducer hook is similar to useState hook in react functional components , the only difference is useReducer is used to manipulate the complex states

2. complex logics for our complex states

useReducer will accepts 2 args

1. state (initial state)
2. reducer function

(initial state) ---> {
name:"hello",
todo:["learn english","learn social"]
}

useReducer will return an array which contains the currentState and dispatch function

const [currentState,dispatchFuntion]=useReducer(reducerFunction,state)

totalTickets :100

action : book_ticket , 99 , holdTicket , cancelTicket

Action is an object which tells what to happen to the state

{
type:"BOOK_TICKET"
}

reducerFunction : it is a pure funtion , based on the action , state manipulations will be occurred in the reducer function

const movieTickets={
totalTickets:100,
bookedTicktes:20,
holdedTickets:20
}

BOOK_TICKET : State has to change 100-1=99
HOLD_TICKET :

dispatchFuntion({
type:BOOK_TICKET
})

const state={
todos:[]
}

todo :

1. ADD_TODO
2. DELETE_TODO
3. UPDATE_TODO

Tasks :

1. Class repeat
2. useReducer - CRUD Operations

topic:

1. UseReducer hook in react
2. Examples of UseReducer hook
