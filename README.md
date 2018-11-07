This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### To run the project:

In the project directory, you can run:

`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### To run the tests:

`npm test`

### In Review

First of all, regarding the unit tests: I created some basic tests for the redux side to demonstrate general unit testing, however I didn't test each reducer condition coming from the higher order reducer. I would also normally test the expected rendering behaviour of the components using Enzyme with Jest, but I wanted to deliver as quickly as possible and unit testing React components can be more time-consuming in the short term.

I tend to find that much of the tech-debt and scalability issues in React projects comes from poor component composition, badly placed redux connections and poor naming of components and props. I plan to refactor this project to improve on those points as there are some big inconsistencies in the naming of the components and props, in the way rendering conditions are handled and the points at which redux state and actions are connected to the components.

I would also usually create a 'common' folder for components which I reuse across the project. As I was using mostly ready-made common components from the Material-UI library I didn't feel the need to work this way. However, on reflection there are clear opportunities to generalise the list components and increase the composition of the App component, which will result in common components being created.

I will add some more styling to the project. The icons in the menu could be coloured and the search components need to be better aligned. I will take some time to get to know Material-UI better and look at some ways to make the app more user-friendly on different devices.

Overall I really enjoyed this project and I am keen to keep improving it.