
'use client'
import { Button } from "@nextui-org/react"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { IoIosMail } from "react-icons/io";
import * as Yup from 'yup';

export default function ForgotPasswordForm() {
   
    const handleSubmit = async (values: any, { resetForm }: any) => {
        try {
           console.log(values);
           resetForm();           
          } catch (error) {
            console.log("Error ", error)
          } finally {
          }
    };
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
    });
    return (
        <Formik
            initialValues={{ 
                email: '',
             }}
            validationSchema={validationSchema}
                
            onSubmit={handleSubmit}
        >
                <Form className="w-full px-1 md:px-10">
                        <div className="w-full  flex flex-col justify-center gap-3">
                            <div className='flex flex-col h-14'>
                                <div className="flex md:w-full ">
                                    <span className="inline-flex items-center px-2 text-lg text-white bg-orange border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-my-gray dark:text-black dark:border-gray-600">
                                        <IoIosMail />
                                    </span>
                                    <Field 
                                        className={`rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-my-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:dark-blue dark:focus:border-blue-500`} 
                                        type="email" 
                                        title="Email" 
                                        name="email" 
                                        placeholder="Email" 
                                        maxLength="255" /><br />
                                </div>
                                <ErrorMessage name="email" className="text-danger font-semibold" component='span' />
                            </div>
                            <div className="flex w-full justify-end">
                                <Button type="submit" size="md" className="w-full mt-6 bg-primary text-white">Send Email</Button>
                            </div>
                        </div>
                </Form>
        </Formik>
    )
}