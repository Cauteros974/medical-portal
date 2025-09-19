import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useDropzone } from "react-dropzone";

const BookingForm = ({ doctorName }) => {
    const { acceptedFiles, getRootProps, getInputProps} = useDropzone();
    const files = acceptedFiles.map(file => <li key={file.path}>{file.path}</li>);

    return(
        <>
        <h3>Make an appointment with {doctorName}</h3>
        <Formik 
            initialValues={{ name: '', photo: '', date: ''}}
            validationSchema={Yup.object({
                name: Yup.string().required("Required field"),
                phone: Yup.string().required("Required field"),
                date: Yup.string().required("Choose date"),
            })}
            onSubmit={(values) =>{
                alert(JSON.stringify({...values, files: files.map(f => f.key)}, null, 2));
            }}
        >
            <Form>

            </Form>
        </Formik>
        </>
    )
};

export default BookingForm;