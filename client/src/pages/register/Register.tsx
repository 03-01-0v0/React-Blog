import './Register.scss';
import {Form, Field, ErrorMessage, Formik} from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import api from '../../api';
import {Redirect} from 'react-router-dom';
import {useState} from 'react';

export default function Register() {
    const [isRedirect, setIsRedirect] = useState(false);
    const handleSubmit = async (value: {username: string; email: string; password: string}) => {
        console.log(value);
        const {username, email, password} = value;
        const res: any = await api.register(username, email, password);
        if (res?.success) {
            Swal.fire('Success', 'Registered', 'success').then((res) => {
                if (res.isConfirmed) {
                    setIsRedirect(true);
                }
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops... Sorry',
                text: 'Something went wrong!',
            });
        }
    };
    if (isRedirect) return <Redirect to='/' />;
    return (
        <div className='register'>
            <span className='registerTitle'>Register</span>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                }}
                validationSchema={Yup.object({
                    username: Yup.string()
                        .min(6, 'must be 6 character or than')
                        .required('Required'),
                    email: Yup.string().email('Must be email').required('Required'),
                    password: Yup.string()
                        .trim()
                        .matches(
                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                            'Password must be at least 8 characters and contain at least 1 uppercase letter, 1 lowercase letter, 1 number'
                        ),
                })}
                onSubmit={(value) => handleSubmit(value)}
            >
                <Form className='registerForm'>
                    <label>Username</label>
                    <Field
                        name='username'
                        className='registerInput'
                        type='text'
                        placeholder='Enter your username...'
                    />
                    <div className='errorMessage'>
                        <ErrorMessage name='username' />
                    </div>
                    <label>Email</label>
                    <Field
                        name='email'
                        className='registerInput'
                        type='text'
                        placeholder='Enter your email...'
                    />
                    <div className='errorMessage'>
                        <ErrorMessage name='email' />
                    </div>
                    <label>Password</label>
                    <Field
                        name='password'
                        className='registerInput'
                        type='password'
                        placeholder='Enter your password...'
                    />
                    <div className='errorMessage'>
                        <ErrorMessage name='password' />
                    </div>
                    <button className='registerButton'>Register</button>
                </Form>
            </Formik>
            <button className='registerLoginButton'>Login</button>
        </div>
    );
}
