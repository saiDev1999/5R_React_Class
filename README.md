API : Application programming interface

instagram :

methods : get, post, delete, put

get api call (server to client)
post call (client to server)
delete (client to server)
put (client to server)

fetch : fetch is used to happen https calls in client
fetch return promise

Fetching data in the react application on page load :

ways for fetching data in react app :

1. fetch
2. axios
3. swr
4. react query

fetch(URL).then().catch()

componentDidMount : This method is used to cause the side effects with in the class component

side effects : api calls(https calls), Dom manipulations, Event listeners, Timers

componentsDidMount is self invoked method

componentDidMount runs only once in a lifecycle

componentDidMount will invoke after the render method

fetch and axios difference :

1. fetch doesn't convert to json , we need to do it manually
2. fetch doesn't provide status codes
3. fetch is provided by browser web api
4. fetch doesn't intercept the response and request

5. axios converts to json automatically
6. we will get the status codes, based on the status codes , we will show the user interface
7. axios is a third party library
8. axios supports intercept the response and request

Tasks:

1. Repeat the class
2. fetch , axios , fetch with then, axios with .then, fetch with async and await ,axios with async and await
3. show the recipe data in UI (https://dummyjson.com/recipes)
4. fetch and axios difference
5. limitations of react

Topics :

1. Fetching the data
2. using fetch
3. using axios
4. async await and .then versions
5. try catch loader, success, and error state handling
