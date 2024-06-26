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
