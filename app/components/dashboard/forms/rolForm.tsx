"use client"

import { Button } from '@nextui-org/react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

interface rol{
    id: number;
    name: string;
    department: number;
    description: string;
    status: boolean;
}

export const RolFormComponent = ({data}:any) =>{


    const validationSchema = Yup.object().shape({
        name: Yup.string().required('El nombre del Rol es requerido'),
        department: Yup.number().required('El Departamento es Requerido'),
        description: Yup.string().required('La Descipción es Requerida'),
    });

    const handleSubmit = (values:any) => {
        console.log(values);
        
    }

    const values = !data?{
        name: "" ,
        department: '',
        description: '',
        confirmPassword: '',
    }:{
        name: data.name,
        department: data.Department,
        description: data.Description,
    }


    return (
       <Formik
            initialValues={values}
            validationSchema={validationSchema}

            onSubmit={handleSubmit}
        >
            <Form className="w-full p-4 md:px-10">
                <div className="w-full  flex flex-col justify-center gap-3">
                <div className="flex w-full justify-center h-20 gap-2">
                    <div className='flex flex-col h-14 w-[50%]'>
                        <label >Nombre Rol</label>     
                        <Field
                            className={`rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-my-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:dark-blue dark:focus:border-blue-500`}
                            type="text"
                            title="Name"
                            name="name"
                            maxLength="255" />
                        <ErrorMessage name="name" className="text-danger font-semibold" component='span' />
                    </div>

                    <div className='flex flex-col h-14  sm:w-[50%]'>
                        <label >Departamento</label>
                        <Field
                            as="select"
                            className={` rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-my-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:dark-blue dark:focus:border-blue-500`}
                            type="email"
                            title="Department"
                            name="department"
                            maxLength="255" >
                                <option value="" label="Select a department" />
                                <option value="1" label="Human Resources" />
                                <option value="2" label="Engineering" />
                                <option value="3" label="Marketing" />
                        </Field>
                        <ErrorMessage name="department" className="text-danger font-semibold" component='span' />
                    </div>
                </div>
                <div className='flex flex-col  w-100%]'>
                        <label >Descripción</label>
                        <Field
                            as="textarea"
                            className={` rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-my-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:dark-blue dark:focus:border-blue-500`}
                            type="text"
                            title="Descripción"
                            name="description"
                            maxLength="255" />
                        <ErrorMessage name="description" className="text-danger font-semibold" component='span' />
                    </div>
                   
                    <div className="flex w-full justify-end">
                        <Button type="submit" size="md" className="w-full mt-6 bg-primary text-white">{data?"Update":"Create New Rol"}</Button>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}