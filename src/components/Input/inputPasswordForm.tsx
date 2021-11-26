import React from 'react'
import * as yup from 'yup'
import { Formik, Form } from 'formik'
import FormikTextInput from './formikTextInput'

const validationSchema = yup.object().shape({
    password: yup
        .string()
        .min(8, 'Password should be at least 8 characters long!')
        .required('Please enter your password'),
})

const InputPasswordForm:React.FC<{onSubmit: ({ password }: {password:string}) => Promise<void>}> = ({ onSubmit }) => {
    return(
        <> 
            <Formik  onSubmit={onSubmit} initialValues={{ password:'', passwordConfirmation: '' }} validationSchema={validationSchema}>
                <Form>
                    <div className='flex flex-col justify-center items-center'>
                        <div>
                            <FormikTextInput name='password' placeholder='Input your password here...' type='password'/>
                        </div>
                    </div>
                    <button type='submit'> Log In </button>
                </Form>
            </Formik>
        </>

    )
}

export default InputPasswordForm