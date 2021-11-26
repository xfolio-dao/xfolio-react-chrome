import React from 'react'
import { useField } from 'formik'

const FormikTextInput:React.FC<{name:string, placeholder:string,type:string,style?:React.CSSProperties}> = ({ name,placeholder,type,style }) => {
    const [field, meta, helpers] = useField(name)

    return(
        <>
            <input placeholder={placeholder}
                onChange={(event) => {
                    helpers.setValue(event.target.value)
                }}
                onBlur={() => {helpers.setTouched(true)}}
                value={field.value}
                style={style ? style : {}}
                type={type}
            />
            {meta.touched && meta.error ? (
                <div className='text-red-600'>{meta.error}</div>
            ) : null}
        </>
    )
}

export default FormikTextInput