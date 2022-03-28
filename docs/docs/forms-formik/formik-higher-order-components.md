## Reusable Formik components

The purpose of this documentation is outline some of the reusable components that are shipped with the Formik library.

A higher order component (HoC) returns the `<Formik>` container with its props and methods. It is an HoC created with the `useContext` Hook.

**Formik**

Top level HoC and its props

```
<Formik
		initialValues={formValues || initialValues}
		validationSchema={validationSchema}
		onSubmit={onSubmit}>
```

**Form**

This component replaces the form JSX tag and has an implicit `onSubmit` wrapped in the top-level Hoc `<Formik>`

**Field**

1. The HOC `<Formik>` renders a `.jsx` input tag
2. Name attribute of the `.jsx` element is linked to the form `state`
3. The name and value attributes are tightly coupled and inbuilt `handleChange()`and `handleBlur()` methods ship with the library
4. You can still pass in custom attributes in the `.jsx` element - like id, placeholder, etc.,

**FieldArray**

- Helps with list manipulation
- Uses the renderProps() method to return a function that renders the children of this HoC
- This function automatically gets props that help return the JSX of the elements of the array dynamically
- Convention of naming the props of this function is `fieldArrayProps` if you log these props in the console you will see the methods and values available in this props object
- There are also the Formik form object to use methods from this object - here are the values property to track the values as they change
- Rendering an array of elements with this HoC - This is good for adding and removing items in a shopping cart

**Fast Fields**

- Use if more than 30 fields in a form
- Used for optimisation
- Re-renders only once - only few instances when it re-renders
- Field has to be independent of other fields in rendering
- Also good for complex validation
- Documentation says use with caution
