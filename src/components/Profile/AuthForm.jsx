import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AuthForm = ({ onLogin }) => (
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
                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" className="form-input" />
                    <ErrorMessage name="password" component="div" className="form-error" />
                </div>
                <button type="submit">LogIn</button>
            </Form>
        </Formik>
    </div>
);

export default AuthForm;