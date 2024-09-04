'use client';

import { Button, Checkbox, Link } from "@nextui-org/react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import { useState } from "react";
import { FaLock, FaLockOpen } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import * as Yup from 'yup';

interface LoginFormValues {
    email: string;
    password: string;
}

const initialValues: LoginFormValues = {
    email: '',
    password: ''
};

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required')
});

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (
        // values: LoginFormValues,
    ) => {
        location.replace('/dashboard');

          
    };
   
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className="w-full px-1 md:px-10">
                <div className="w-full flex flex-col justify-center gap-3">
                    <div className='flex flex-col h-14'>
                        <div className="flex md:w-full ">
                            <span className="inline-flex items-center px-2 text-lg text-white bg-orange border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-my-gray dark:text-black dark:border-gray-600">
                                <IoIosMail />
                            </span>
                            <Field
                                className={`rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-my-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:dark-blue dark:focus:border-blue-500`}
                                type="email"
                                title="Email"
                                name="email"
                                placeholder="Email"
                                maxLength="255"
                            /><br />
                        </div>
                        <ErrorMessage name="email" className="text-danger text-sm font-semibold" component='span' />
                    </div>

                    <div className="flex flex-col h-14">
                        <div className="flex md:w-full ">
                            <span
                                className="inline-flex items-center px-2 text-lg text-white cursor-pointer bg-orange border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-my-gray dark:text-black dark:border-gray-600"
                                onClick={toggleShowPassword}>
                                {showPassword ? <FaLockOpen /> : <FaLock />}
                            </span>
                            <Field
                                className={`rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-my-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                type={showPassword ? 'text' : 'password'}
                                title="Password"
                                name="password"
                                placeholder="Password"
                                maxLength="64"
                            />
                        </div>
                        <ErrorMessage name="password" className="text-danger text-sm font-semibold" component='span' />
                    </div>
                    <div className='flex flex-col gap-2 items-start'>
                        <Checkbox>remember me</Checkbox>
                        <Link className="text-primary" href="/auth/forgot-password">Forgot your Password?</Link>
                    </div>
                    <div className="flex w-full justify-end">
                        <Button type="submit" size="md" className="w-full mt-6 bg-primary text-white">Sign In</Button>
                    </div>
                </div>
                {errorMessage && (
                    <div className="flex h-8 items-end space-x-1 mt-2" aria-live="polite" aria-atomic="true">
                        <FaLock className="h-5 w-5 text-red-500" />
                        <p className="text-sm text-red-500">{errorMessage}</p>
                    </div>
                )}
            </Form>
        </Formik>
    );
}
