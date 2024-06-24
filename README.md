Topics:

1. Lifecycle method in react class components
2. Mounting phase
3. Updating phase
4. v-dom and dom , difference

Tasks:

1. Repeat the class
2. Material UI Custom components creation in react app
3. Add circle part 1(add circles while clicking buttons)
4. Add circle part 2(colored and uncolored)
5. difference between vdom and dom

Life cycles in class component

Metaphor :

Earth :

Human cycle :

1. Born stage
2. Survival stage
3. Expiry stage

Dom :

Component life cycle:

1. Every component will goes to different stages through out its execution , those were represented using
   Component life cycles
2. Component life cycle methods only present in class components

3. Mounting stage or phase

   1.1 render : this method is used to insert the jsx content in the browser, this method is mandatory
   1.2 constructor : constructor is used for state initialization and binding the events
   1.3 componentDidMount : this method is used to cause the side effects on the page load
   1.4 getDerivedStateFromProps : this method is used to initialization the state based on the initial props

side effects : data fetching , timers , event listeners, dom manipulations

whenever state changes occurs , code will goes to render,getDerivedStateFromProps

2. Updating stage or phase

2.1 render
2.2 getDerivedStateFromProps
2.3 componentDidUpdate
side effects : data fetching , timers , event listeners, dom manipulations
2.4 shouldComponentUpdate
2.5 getSnapShotBeforeUpdate

3. UnMounting stage or phase
1. componentWillUnmount

DOM : Drawbacks :

1. Entire html will be re-render when something updates
2. More time to respond
3. browser

1 sec loading 5% users down

Virtual dom : Virtual dom is a replica of original dom , which is just a memory represtation
virtual dom will be maintained by the react itself

with in vdom we have 2 algorithms:

1. diffing algorithm : diffing algorithm will check the previous state and current state (previous dom and current dom), these changes will be noted
2. reconcilation algorithm : reconcilation algorithm will perform the changes after comparison , only those changes will be updated in the real dom , without disturbing any other part of UI

note: Because of vdom updates are very faster , loading time is minimal
ex: 10 list item, when new list item is inserted , react creates a v-dom , compare changes with previous one , only updated new one
