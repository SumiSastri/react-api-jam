Forms are different from static display pages as they utilise controlled inputs.

This means the input in the form are controlled by the user not by the programmer. Therefore the library needs to react to the changes in these inputs.

Components that use controlled inputs are also referred to as controlled components instead of forms.

The functions in these controlled components are event driven - the events most commonly used are:

- click events
- blur events - used to capture validation errors
- submit events which are click events that perform the action of submitting the form data

Data that the key components use is defined or initialised in `state` - in the case of class components this is in a stateful component. With react hooks it is the component that calls the data from an API and displays this on a page.

Forms then interact with this API-call and change other components reliant on this component. The 2 ways that data is rendered is via mutations of state or using methods in the props object of a component.
