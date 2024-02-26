import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const UserSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too short!')
        .max(50, 'Too long!')
        .required('This is required you dummy!'),
    number: Yup.string()
        .min(9, 'Too short!')
        .max(12, 'Too long!')
        .required('This is required you dummy!'),
});

export default function ContactForm({ onContact }) {
    const usernNameId = useId();
    const numberId = useId();
    const initialValues = {
        username: '',
        tel: '',
    };
    const handleSubmit = ({ name, number }, actions) => {
        onContact({ id: nanoid(), name, number });
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={{ initialValues }}
            onSubmit={handleSubmit}
            validationSchema={UserSchema}
        >
            <Form>
                <label htmlFor={usernNameId}>Name</label>
                <Field type="text" name="name" id={usernNameId} />
                <ErrorMessage name="name" component="span" />
                <label htmlFor={numberId}>Number</label>
                <Field type="number" name="number" id={numberId} />
                <ErrorMessage name="number" component="span" />
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
}
