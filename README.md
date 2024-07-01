ex: Navigations, data fetching

create-react-app doesn't provide the navigations

Navigations(Routing) : We will depend on third party library called as React-Router-Dom

React-Router-Dom allows react to provide internal application navigations,

we dont use anchor tags for internal redirections (anchor tags doesn't have states linking way in react)

npm i react-router-dom

https://www.zomato.com/ - base URL
investor-relations - path

Navigations can be of 2 ways

1. Static navigations
2. Dynamic navigations

https://www.zomato.com/ - base URL
hyderabad/ - dynamic (location)
lord-of-the-drinks-jubilee-hills/ - dynamic (id of the restaurant)
info - static

There are 2 ways for navigation in react router dom

1. Using Link component -> un protected
2. using useNavigate hook in react-router-dom

Tasks:

1. Repeat the class
2. Complete the login and registration navigations along with local storage
3. Take the input accept the number , based on the number generate the buttons , redirect to details page
4. Protected and unprotected routes
