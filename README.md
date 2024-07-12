HOC:
A higher-order component (HOC) in React is an advanced technique for reusing component logic.
HOCs are functions that take a component and return a new component.
They can be used to add additional functionality or props to the wrapped component.

const HocComponent =(WrappedComponent)=>{
return ()=>{
return <WrappedComponent name="hello ram"   />
}

}

advantages : we can avoid logical functionalities to be written multiple times

scenerio : To log the props for the set of components

React : 18.3
Future Version 19 version

Memorization :

Memorization is a technique which cache the results of the functions without recalculating when inputs and instances happened , By memorizing we can avoid recalculations

1. React.memo() --> react.memo is a hoc provided by the react
2. useMemo()
3. useCallback()

Tasks:

1. Repeat the class
2. Try the global counter using useReducer and useContext (https://medium.com/suyeonme/using-usecontext-and-usereducer-together-lets-create-redux-like-global-state-in-react-87470e3ce7fa)
3. Counter using HOC

useMemo : useMemo is a react funtional component hook , It will memorizes the value returned by the funtion (by caching the result that was returned)

ex:

1milk -> 10 rupeees

Day 1 Milk 5 50 rupees
Day 2 milk 5 50 rupees
Day milk 5 50 rupees

ex: counter1, counter 2

counter

const isEven=()=>{
return counter1%2===0 ?"EVEN":"ODD
}

usememo syntax : it will accepts 2 args

1. callback function (value returned function tht needs to be memorised)
2. array (dependecncy)

useCallback : It will memorizes the function , which ultimately prevents re-renders of the child component

useCallback syntax : 2 args

1. callback function (function to be memorised)
2. array
