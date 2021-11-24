import React, { useEffect } from 'react'
import SimpleLayout from '../../components/Layout/simple'
// import { Link } from 'react-router-dom'
import { useWalletContextValue } from '../../hooks'
import Button from '../../components/Button'

const SignUpForm:React.FC = () => {
    return (
        <div className='flex flex-col h-[100%] justify-center items-center'>
            <p>Welcome to Xfolio Chrome friend!</p>
            <Button text='Create a wallet'/>
            <Button text='Import a wallet'/>
        </div>
    )
}

const LoginForm:React.FC = () => {
    return (
        <div>
            <input placeholder='Input your password here'></input>
            <Button text='Forgot your password?'/>
        </div>
    )
}

const Login:React.FC = () => {
    const { jsonWallet } = useWalletContextValue()
    useEffect(() => console.log(jsonWallet),[jsonWallet])
    return( 
        <SimpleLayout>
            <div className='container h-[475px]'>
                {
                    jsonWallet === '' 
                        ? <SignUpForm/>
                        : <LoginForm/>
                }
                {/* <Link to='/wallet'>Sign me in!</Link> */}
            </div>
        </SimpleLayout>
    )
}

export default Login