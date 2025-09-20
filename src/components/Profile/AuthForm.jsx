import { Formik, Form, Field, ErrorMessage } from "formik";

const AuthForm = ({ onLogin }) => {
    <div className="form-wrapper">
        <h2>Login or Registration</h2>
        <Formik
            initialValues = {{ email: '', password: ''}}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email').required("Required field"),
                password: Yup.string().min(6, 'Password is too short').required("Required field"),
            })}
            onSubmit={() => {
                onLogin({ email: 'user@example.com'});
            }}
        >
            <Form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email" className="form-input" />
                    <ErrorMessage name="email" component="div" className="form-error" />
                </div>
                <div className="form-group">
                    
                </div>
            </Form>
        </Formik>
    </div>
}