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
