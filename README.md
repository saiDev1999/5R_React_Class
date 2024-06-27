Tasks:

1. Repeat the class
2. Check the documentation of hero icons
3. Register form using uncontrolled components
4. Store the data in the local storage
5. Try the todo with uncontrolled

Topics:

1. State management in react
2. Forms in react
3. Uncontrolled components
4. creating forms using Tailwind css (https://www.devwares.com/blog/how-to-create-react-forms-using-tailwind-css/)

Forms :

There are 2 ways to handle the forms in the react applications

1. uncontrolled components

In uncontrolled components , input state changes will be controlled by the DOM
Field validations were not possible in uncontrolled components , overall form validations will be possible
Maintanence will be difficult

2. controlled components

In uncontrolled components , input state changes will be controlled by the React itself  
Field validations were possible
Maintanence will be easy

Forms important terms :

1. state management of the inputs
2. validations
3. submissions (Https request)

4. uncontrolled components :

useRef : useRef is hook in functional components which can directly access the dom through the reference
useRef hook persists the values between renders
useRef hook doesn't cause re-renders

syntax : useRef accepts the initial value(optional), and returns the variable which we can use for attaching for the node reference

const ref = useRef()

steps to create uncontrolled components :

1. Implement the form which contains JSX
2. Create the references for the inputs using useRef hook provided by the react
3. Attach the references for the inputs using ref attributes given to the inputs
4. on submit collect the user input using ref.current.value

State managment : Managing the data with in the application

State management is of 2 ways :

1. Local state management

using useState alone only local state management is possible

2. Global state management :

Global state management refers to managing data through out the applications irrespective of the size of the application

metaphor : ex: Books library

Topics :

1. Reason why we need to prefer functional components over class components
2. Hooks introduction and details
3. Rules of hooks
4. UseState hook with examples

Tasks:

1. Repeat the class
2. Remove all, upadte each
3. corousel in react (tailwind)
4. Todays task give table UI

Reason why we need to prefer functional components over class components

1. Complexity will be more in class components
2. Readability is less in class components
3. Maintainence is more in class components
4. scalability takes much time
5. Every code flow will be spiltted into different parts in the component

Functional components main feature: Hooks

Hooks : Hooks is a feature in the react introduced in 16.8 version
Hooks let us use of state and other react features(life cycle methods) without using the class
Hooks are the re-usable predefined funtions provided by the react
Hooks will common problems like creation of state, managing the state, async actions

Rules of hooks :

1. Hooks are only used in functional components
2. Hooks must be used on top of the component and must import from react
3. Hooks cannot be used inside the loops and condition
4. Hooks cannot be used inside the events

Hooks Examples:

1. useState
2. useEffect
3. useRef
4. useReducer
5. useContext
6. useMemo
7. useCallback
8. custom hooks (use5R)

React-router-dom

1. useNavigate
2. useParams

useState :

useState is a hook which helps us to create the state and manage the state

It is replica of state creation using contructor and setState methods

syntax:

1. useState will accept the initialState as an argument

initialState-> any data type

initialState = 0

useState(initialState)

2. useState will return an array which contains 2 elements

1. current state
1. updaterFuntion : it will update the current state

states changes are async

final syntax : const[current,updaterFuntion]=useState(initialState)
const represents the immutability , we cannot change the state directly
