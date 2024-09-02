'use client'

import { Button, Link } from "@nextui-org/react"
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import { useState } from "react";
import { FaLock, FaLockOpen, FaLocationDot, FaUser, FaPhone, FaCalendar, FaRegCalendarCheck   } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { PiGenderIntersexBold } from "react-icons/pi";
import * as Yup from 'yup';

interface singUpForm {
    name: string;
    middle_name: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
    address: string;
}
const initialValues: singUpForm = {
    name: '',
    middle_name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    address: '',
}



export default function SingUpForm() {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };


    const handleSubmit = async (values:any, { resetForm }:any) => {
        try {
            console.log(values);
            resetForm();
        } catch (error) {
            console.error("Error", error);
        } finally {
            // Puedes realizar acciones adicionales aquí si es necesario
        }
    };
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        middle_name: Yup.string().required('Middle Name is required'),
        address: Yup.string().required('Address is required'),
        gender: Yup.string().required('Gender is required'),
        cellPhone: Yup.number().required('Cell Phone is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required')
            .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .matches(/[0-9]/, 'Password must contain at least one number')
            .matches(/[\W_]/, 'Password must contain at least one special character'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Confirm Password is required')
    });
    
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}

            onSubmit={handleSubmit}
        >
            <Form className="w-full px-1 md:px-10">
                <div className="w-full  flex flex-col justify-center gap-4">
                    <div className="flex w-full justify-between flex-wrap gap-4 ">
                        <div className='flex flex-col h-14 w-full md:w-[48%]'>
                            <div className="flex md:w-full ">
                                <span className="inline-flex items-center px-2 text-lg text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-my-gray dark:text-black dark:border-gray-600">
                                    <FaUser />
                                </span>
                                <Field
                                    className={`rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5`}
                                    type="text"
                                    title="Name"
                                    name="name"
                                    placeholder="Name"
                                    maxLength="255" /><br />
                            </div>
                            <ErrorMessage name="name" className="text-red-600 font-semibold" component='span' />
                        </div>

                        <div className='flex flex-col h-14 w-full md:w-[48%]'>
                            <div className="flex md:w-full ">
                                <span className="inline-flex items-center px-2 text-lg text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-my-gray dark:text-black dark:border-gray-600">
                                    <FaUser />
                                </span>
                                <Field
                                    className={`rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5`}
                                    type="text"
                                    title="Middle Name"
                                    name="middle_name"
                                    placeholder="Middle Name"
                                    maxLength="255" /><br />
                            </div>
                            <ErrorMessage name="middle_name" className="text-red-600 font-semibold" component='span' />
                        </div>
                    </div>
                    <div className="flex w-full justify-between flex-wrap gap-4">
                        <div className='flex flex-col h-14 w-full md:w-[48%]'>
                            <div className="flex md:w-full ">
                                <span className="inline-flex items-center px-2 text-lg text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-my-gray dark:text-black dark:border-gray-600">
                                    <FaLocationDot />
                                </span>
                                <Field
                                    className={`rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1  text-sm border-gray-300 p-2.5`}
                                    type="text"
                                    title="Address"
                                    name="address"
                                    placeholder="Address"
                                    maxLength="255" /><br />
                            </div>
                            <ErrorMessage name="address" className="text-red-600 font-semibold" component='span' />
                        </div>

                        <div className='flex flex-col h-14 w-full md:w-[48%]'>
                            <div className="flex md:w-full ">
                                <span className="inline-flex items-center px-2 text-lg text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-my-gray dark:text-black dark:border-gray-600">
                                    <PiGenderIntersexBold />
                                </span>
                                <Field
                                    as="select"
                                    className={`rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5`}
                                    name="gender"
                                    
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Field>
                            </div>
                            <ErrorMessage name="gender" className="text-red-600 font-semibold" component='span' />
                        </div>
                    </div>
                    <div className="flex w-full justify-between flex-wrap gap-4">
                        <div className='flex flex-col h-14 w-full md:w-[48%]'>
                            <div className="flex md:w-full ">
                                <span className="inline-flex items-center px-2 text-lg text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-my-gray dark:text-black dark:border-gray-600">
                                    <FaPhone  />
                                </span>
                                <Field
                                    className={`rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1  text-sm border-gray-300 p-2.5`}
                                    type="text"
                                    title="Cell Phone"
                                    name="cellPhone"
                                    placeholder="Cell Phone"
                                    maxLength="15" /><br />
                            </div>
                            <ErrorMessage name="address" className="text-red-600 font-semibold" component='span' />
                        </div>

                        <div className='flex flex-col h-14 w-full md:w-[48%]'>
                            <div className="flex md:w-full ">
                                <span className="inline-flex items-center px-2 text-lg text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-my-gray dark:text-black dark:border-gray-600">
                                    <FaCalendar />
                                </span>
                                <Field name="birthDate">
                                    {({ field }:any) => (
                                        <input 
                                            type="date"
                                            className={`rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5`}
                                            id="birthDate"
                                            // selected={field.value}
                                            // onChange={(date) => setFieldValue('birthDate', date)}
                                        // Ajusta cualquier otra configuración que desees
                                        />
                                    )}
                                </Field>
                            </div>
                            <ErrorMessage name="birthDate" className="text-red-600 font-semibold" component='span' />
                        </div>
                    </div>
                    <div className='flex flex-col h-14'>
                            <div className="flex md:w-full ">
                                <span className="inline-flex items-center px-2 text-lg text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-my-gray dark:text-black dark:border-gray-600">
                                    <IoIosMail />
                                </span>
                                <Field
                                    className={`rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5`}
                                    type="email"
                                    title="Email"
                                    name="email"
                                    placeholder="Email"
                                    maxLength="255" /><br />
                            </div>
                            <ErrorMessage name="email" className="text-red-600 font-semibold" component='span' />
                        </div>
                    <div className="flex w-full justify-between flex-wrap gap-4">
                        <div className="flex flex-col h-14 w-full md:w-[48%]">
                            <div className="flex md:w-full ">
                                <span
                                    className="inline-flex items-center px-2 text-lg text-gray-900 cursor-pointer bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-my-gray dark:text-black dark:border-gray-600"
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
                            <ErrorMessage name="password" className="text-red-600 font-semibold" component='span' />
                        </div>
                        <div className="flex flex-col h-14 w-full md:w-[48%]">
                            <div className="flex md:w-full ">
                                <span
                                    className="inline-flex items-center px-2 text-lg text-gray-900 cursor-pointer bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-my-gray dark:text-black dark:border-gray-600"
                                    onClick={toggleShowPassword}>
                                    {showPassword ? <FaLockOpen /> : <FaLock />}
                                </span>
                                <Field
                                    className={`rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-my-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                    type={showPassword ? 'text' : 'password'}
                                    title="Confirm Password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    maxLength="64"
                                />
                            </div>
                            <ErrorMessage name="confirmPassword" className="text-red-600 font-semibold" component='span' />
                        </div>
                    </div>


                    <div className="flex w-full justify-end">
                        <Button type="submit" size="md" className="w-full mt-6">Sin Up</Button>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}