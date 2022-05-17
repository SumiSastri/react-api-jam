
- Test the api outside the component with mocks/spies
- It is expensive to call an API just for the purpose of testing, you want the API call for your users not for internal users (devs/ testers)
- real api calls can timeout - take long to load/ have internal server errors
- the purpose of testing an api with a mock is not to test the internal functions of the call but the return - what data does it return so the object is mocked and matchers like `toBeCalled()/ toBeCalledWith()` test the return statement


Step 1:
Create a utility function to call your API
Mock test the utility function with mocks/ spies/ matchers