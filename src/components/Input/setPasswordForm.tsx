import React from 'react'
import * as yup from 'yup'
import { Formik, Form } from 'formik'
import FormikTextInput from './formikTextInput'


const validationSchema = yup.object().shape({
    password: yup
        .string()
        .min(8, 'Password should be at least 8 characters long!')
        .required('Please enter your password'),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), null],'Passwords must match')
        .required('Please confirm your password')
})

const SetPasswordForm:React.FC<{onSubmit: ({ password }: {password:string}) => Promise<void>}> = ({ onSubmit }) => {
    return(
        <> 
            <Formik  onSubmit={onSubmit} initialValues={{ password:'', passwordConfirmation: '' }} validationSchema={validationSchema}>
                <Form>
                    <div className='flex flex-col justify-center items-center'>
                        <div>
                            <FormikTextInput name='password' placeholder='Input your password here...' type='password'/>
                        </div>
                        <div>
                            <FormikTextInput name='passwordConfirmation' placeholder='Confirm your password...' type='password'/>
                        </div>
                    </div>
                    <button type='submit'> Submit </button>
                </Form>
            </Formik>
        </>

    )
}

export default SetPasswordForm