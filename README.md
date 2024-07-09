State management :
Managing the data with in the application

There are 2 ways to manange state in react applications

1. Local state management -> useState
2. Global state management
   2.1 for Global state management we have 3 ways
3. Props
   Prop drilling : Prop drilling is situation where data needs to be used in destinated components , i need to disturb every level of the component structure

Drawbacks:

1. Code readability and maintenence will be downgraded
2. Every component will get disturbed to forward to final level
3. Performance Overhead
4. Decreased Component Reusability
5. Increased Development Time

6. Context API

Context api is used for global state management ,
it allows us to manage the data with in react application by avoiding prop drilling
Context api is inbuilt concept in react

steps for creating context in react funtional components

1. Identify the components that we need to share the data
2. Identify the data that needs to be shared
3. Create a context using createContext method for identified components
4. Wrap the context using provider , and pass value prop and assign the data that needs to be shared
5. Identify the destination components (where we need to use) , and use useContext hook provided by the react, and pass created context variable as a argument for useContext hook

6. Redux

Tasks :

1. Repeat the class
2. Difference between local state management and Global state Management
3. Why we need avoid prop drilling , when to pass as a props
4. give user input in the settig screen , change globally using context
5. difference between context api , prop drilling (adv of context api)

Topics :

1. Global state management
2. Prop drilling
3. Context api
4. useContext hook
5. Global counter using useState + useContext hooks
