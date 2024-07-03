useEffect :

useEffect is a hook in react functional components, It causes the side effects in the components

side effects: Data fetching , Dom manipulations, Timers, Event listeners

useEffect is replica of 3 methods

1. ComponentDidMount
2. ComponentDidUpdate
3. ComponentWillUnmount

syntax: useEffect will accept 2 args

1. callback function
2. array (dependency array)

useEffect(()=>{
// side effects trigerring
},[])

note : Based on the dependency array, behaviour of useEffect will changes

case 1 : empty dependency array - componentDidMount
useEffect(()=>{
// side effects trigerring
},[])

case 2 : array with some values or variables - ComponentDidUpdate
useEffect(()=>{
// side effects trigerring
},[variable1,variable2,variable3...])

note : when variables changes useEffect will be trigger

case 3 : Remove dependency array
useEffect(()=>{})
when dependency array removed , component will gets re-render evreytime when state or prop changes , it can also leads to infinite render

case 4 : callback function returns the another function - ComponentWillUnmount

useEffect(()=>{

    //side effects

return ()=>{
// clean up tasks
// prevents the memory leakages
}
},[])

Tasks:

1. Repeat the class
2. Redirect to product details screen (Hit the product detail api and show in UI)
3. Timer in react (funtional components)
4. Hit the recipe api , show in table
