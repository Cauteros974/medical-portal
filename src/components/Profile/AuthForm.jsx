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
            
        </Formik>
    </div>
}