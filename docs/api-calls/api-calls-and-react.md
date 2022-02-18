As the React library uses the MVC model. The component is only ready to receive the information from external data when the component mounts on the virtual DOM.

The first render is with the initial state and when state is mutated, the component is re-rendered with the new updated statte.

State management tools deal with this differently (Redux/ Mobx) but fundamentally the components consume the API data and state changes when the component requires some state change

# Class-based components

Therefore API calls are made in the `componentDidMount()` method. The data flows from the API once the URL is called with an HTTP runner - either the inbuilt JavaScript `fetch()` or with libraries and their methods such as the Axios library.

Once the CRUD methods are called (Create/Update/Delete with the verbs GET, POST, PUT, DELETE) the data from the external API flows into the component.

To utilise the data, the initial state needs to be modified and set to the response that you get from the request sent to the servers.

Variables`req` and `res` are used to denote these actions with errors assigned to a variable `err` these are all dimunitives of request, response and error and the full form can be used.

The request is send to the server as a data then comes back in its representation state as a `.json` object in the body of the response with REST or as a schema with GraphQL.

Once the data comes back we can work on the state-management in the component. Initial state is declared in the constructor method of the class component.

State is updated in the `componentDidMount()` method using the `this` key word to bind the change to the state of the component it is called in.

You can debug and check the response by logging it to the console, now you can set the data you have got back from the response headers to the `setState()` method which returns the updated initial state set to the data that comes back from the API call.

```
class App extends Component {
  constructor() {
    super();
    this.state = {
   initialState= ""
    ,
    };
  }

componentDidMount(){
    const data = fetch('/api-data')
    .then((response) => response.json())
    <!-- .then((response) => console.log(response)) -->
    .then((data) => this.setState({ initialState: data }));
}

```

# Hooks

With hooks, the lifecycle methods are abstracted out of the component and the `useEffect()` hook is where the external API is called and state is set. Initial state is set in a deconstructed array with the `useState` hook.

As the `componentDidMount()` called only once, it is invoked after component successfully renders on DOM-API's DOM-tree with all its children in this life-cycle method as it is accessing the DOM and interacting with the DOM), the DOM-tree is an array and once the component mounts it re-renders every time there is a change in the state or props with the `render()` method, the only mandatory method that every component has.

The `useEffect` method is a call back function which calls the API data and sets state, to prevent polling or constant re-renders as the call back constantly is requesting the `render()` as state is set with the `useEffect()` method to prevent the re-render of the DOM-tree and empty array representing the DOM tree is used before the function call is complete.

```
[initialState, setInitialState] = useState()

useEffect(() => {
const data = fetch(api-data)
setInitialState(data)
}, [])
}

```
