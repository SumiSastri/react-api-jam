- Cross-browser compatible

Documentation[https://github.github.io/fetch/]

Syntax:

```
fetch(url, options).then(function(response) {
  // handle HTTP response
}, function(error) {
  // handle network error
})
```

- The fetch API is promised based with the request returning a promise that is resolved back into `.json`
- The server sends back a `.json` string which then manually has to be serialised in the component with the `response.json()` method in a `.then(() ={ })` promise
- the request can be saved in a variable so that the method can be reused

```
    const data = fetch('/api-data')
    .then((response) => response.json())
    <!-- .then((response) => console.log(response)) -->
    .then((data) => this.setState({ initialState: data }));
```
