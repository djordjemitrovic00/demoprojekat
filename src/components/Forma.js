import {useFormik, Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

export const Forma = () => {

    const gender = {
        male: "malee",
        female: "femalee"
    }

    const validationSchema = Yup.object({
        username: Yup.string().min(5, "Username is too short!").max(20, "Username is too long").required("This field cannot be empty!"),
        firstName: Yup.string().min(5).max(50).required(),
        lastName: Yup.string().min(5).max(50).required(),
        age: Yup.mixed().oneOf(Object.values(gender))
    })

    const formik = useFormik({
        initialValues: {
            username: '',
            firstName: '',
            lastName: '',
            age: ''
        },
        validationSchema: validationSchema
    });
    const handler = (values) => {
        console.log(values);
    }
    return (
        <Formik initialValues={{
            username: '',
            firstName: '',
            lastName: '',
            age: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handler}>
            {formProps => (
                <Form>
                <label>Username</label>
                <Field name="username" />
                <ErrorMessage name='username'/>
                <br/>
                <label>First name</label>
                <Field id="firstName" name="firstName" />
                <br/>
                <label>Last name</label>
                <Field id="lastName" name="lastName" />
                <br/>
                <label>Age</label>
                <Field id="age" name="age" />
                <br/>
                <input type="submit"/>
                <button onClick={() => console.log(formProps)}>Dugme</button>
            </Form>
            )}
        </Formik>
    )
}