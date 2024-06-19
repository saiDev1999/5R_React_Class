Website

1. static -> UI
2. dynamic -> Funtion

React props and state

Props :

1. Additional information given to the components
2. For Component we can have as many custom props
3. Props are user defined
4. Using Props we can communicate from parent to child (data forward from parent to child)
5. Props are immutable(we cannot change over the time)
6. Prop is an object which holds the data

There are 2 ways for the props

1. general prop
2. children prop

general prop :

<ImageComponent  src="path"  width="" height=""  alt="">

children
</ImageComponent>

<Button   text="" backgroundColor="" height=""  width= "" textColor="" >

<>

children prop

1. Using children prop we can nest the components
2. To receive the children prop we must use children keyword

React Fragments:

1. <></>
2. <React.Fragments></React.Fragments>
