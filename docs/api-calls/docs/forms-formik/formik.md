Formik is not a silver bullet for form state-management it is merely a tool. It uses Hooks to plug into the React library (useFormik Hook).

You do not need to use Formik for all forms. You can use a mix of React forms and Formik - do whatever is least akward.

Formik advantages are that it is scalable, easy integrates well with Yup validation, tightly coupled with validation is the handling of errors and reduces boiler plate with the formik.getFieldProps() method. So change handling, handling submissions are much easier with the Formik libraries pre-written hooks.

## Scaffolding:

1. cd client `npm install -D formik --save`

## How to add Formik and create a Form page with a reusable form Input

## References

Documentation [https://formik.org/docs/overview]
My Formik GitHub repo for how-to-guides: [https://github.com/SumiSastri/react-forms-hub/tree/master/src/components/docs]
