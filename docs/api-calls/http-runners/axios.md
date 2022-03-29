The purpose of this documentation is to provide guide-rails while using the Axios HTTP runner.  
Documentation[https://github.com/axios/axios]

Axios is another HTTP runner that needs to be installed as a package in your repo.
`npm install axios`
The advantages of Axios

- JavaScript based so all js methods can be used
- the body in `.json` is pre-parsed with FETCH API this is done in 2 steps
- allows you to make several requests at the same time
- has a `setTimeOut()` which can in some instances be helpful.
- more useful methods than jQuery without jQuery bloat in the code.
- good cross-browser support
- can be used with typescript
- can be used with JavaScript promises

```
componentDidMount(){
    axios.get('url')
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }
```

With Axios you can also use the same principles of assigning the function call for the API data to a variable and then calling the function in the mounting phase of the component

```
<!-- function declaration -->
const getMyAPI = () => {
    axios.get(`/url`)
      .then(res => this.setState({  data: res.data }))
      .catch(err => console.log(err))
  }
<!-- function call -->
  componentDidMount() {
    this.getUser()
  }
```

In the render method then

```
const {data,errors} = this.state
<jsx>
data={data}
errors={errors}
</>
```

This repo shows how useful this can be [https://github.com/SumiSastri/booker-ga-group-project/blob/master/src/components/loans/loansAll.js]

You can also use async-await as you can see in this example from the official documentation

```
async const getUser = () => {
  try {
    const response = await axios.get('url');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

The responses you get from the request are the following once again from the documentation

```
axios.get('url')
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
```
