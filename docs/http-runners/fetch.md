The purpose of this documentation is to provide guid-rails while using the Fetch API.  
Documentation[https://github.github.io/fetch/]

Syntax:

```
fetch(url, options).then(function(response) {
  // handle HTTP response
}, function(error) {
  // handle network error
})
```

- The fetch API is promised based with the request returning a promise that is resolved back into `.json`. JavaScript promises either resolve the request or reject the request and throws errors.
- The server sends back a `.json` object. You parse the json with the `response.json()` method in the Fetch API

The method has 2 params url and options, if you want to use the options param

```
fetch('/url', {
  <!-- options param -->
  method: 'POST',
  body: JSON.stringify(this.state.data),
  headers: { 'Content-Type': 'application/json' }
})
<!-- resolve the response to json -->
  .then(res => res.json())
  <!-- the resolved data should be returned check -->
  .then(data => console.log(data))
  <!-- catch network errors -->
  .catch(err => console.log(err));
```

More reading[https://davidwalsh.name/fetch]

As Walsh suggests it may be useful to assign the whole operation to a variable

```
<!-- declare the function -->

const getMyAPI = fetch('/url', {
method: 'POST',
mode: 'cors',
redirect: 'follow',
headers: new Headers({
'Content-Type': 'text/plain'
})
});

<!-- call the function  -->

getMyAPI()
.then((response) => response.json())
.then((data) => this.setState({ initialState: data })
.catch(function(err) {
// Error :(
);

```

Asynchronous JavaScript can also be used with an `await` block and this assigned to named function as well as the response manually serialised back into `json` for consumption by front-end components. This is not widely recommended as it blocks calls and has some efficiency challenges.

```
const asyncApiCall = async () => {
  await fetch(`url`, {
method: 'POST',
mode: 'cors',
redirect: 'follow',
headers: new Headers({
'Content-Type': 'text/plain'
})
});
}
await response.json()
.then((response) => response.json())
      <!-- .then((response) => console.log(response)) or errors -->
    .catch(function(err) {
	// Error :(
})
    .then((data) => this.setState({ initialState: data }));
```

From the documentation, the full syntax of the Fetch API for reference is here:

```
fetch(url, {
method: "POST",
body: JSON.stringify(data),
headers: {
"Content-Type": "application/json"
},
credentials: "same-origin"
}).then(function(response) {
response.status //=> number 100–599
response.statusText //=> String
response.headers //=> Headers
response.url //=> String

return response.text()
}, function(error) {
error.message //=> String
})
```

With Hooks:
useEffect(() => {
fetch(url, options)
.then(response => response.json())})
.then(data => {
setInitialState(data)
}, [])

useEffect(() => {
(async (fetchMyAsyncAPI) => {
fetch(url, options)
.then(response => response.json())})
.then(data => {
setInitialState(data)
});
}, fetchMyAsyncApi()
[])
