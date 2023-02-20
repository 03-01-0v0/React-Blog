import './Login.scss';
import {Form, Field, ErrorMessage, Formik} from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import api from '../../api';
import {Redirect} from 'react-router-dom';
import {useState} from 'react';

export default function Login() {
    const [isRedirect, setIsRedirect] = useState(false);
    const handleSubmit = async (value: {email: string; password: string}) => {
        console.log(value);
        const {email, password} = value;
        const res: any = await api.login(email, password);
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
        <div className='login'>
            <span className='loginTitle'>Login</span>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={Yup.object({
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
                <Form action='' className='loginForm'>
                    <label htmlFor='email'>Email</label>
                    <Field
                        id='email'
                        type='text'
                        className='loginInput'
                        placeholder='Enter your email...'
                    />
                    <div className='errorMessage'>
                        <ErrorMessage name='username' />
                    </div>
                    <label htmlFor='password'>Password</label>
                    <Field
                        id='password'
                        type='password'
                        className='loginInput'
                        placeholder='Enter your password...'
                    />
                    <div className='errorMessage'>
                        <ErrorMessage name='username' />
                    </div>
                    <button className='loginButton'>Login</button>
                </Form>
            </Formik>
            <button className='loginRegisterButton'>Register</button>
        </div>
    );
}
