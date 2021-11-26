import React, { useEffect } from 'react'
import SimpleLayout from '../../components/Layout/simple'
import { useNavigate } from 'react-router-dom'
import { useWalletContextValue } from '../../hooks'
import Button from '../../components/Button'
import logo256 from '../../assets/xfolio256.png'
import InputPasswordForm from '../../components/Input/inputPasswordForm'
import { createConnectedWalletFromJson } from '../../utils/ethers'

const SignUpForm:React.FC = () => {
    const navigate = useNavigate()

    return (
        <>
            <Button text='Create a wallet' handleClick={() => navigate('/mnemonic/create')}/>
            <Button text='Import a wallet' handleClick={() => navigate('/mnemonic/import')}/>
        </>
    )
}

const LoginForm:React.FC = () => {
    const navigate = useNavigate()
    const { jsonWallet, setWallet } = useWalletContextValue()
    const onSubmit = async ({ password }: {password:string}) => {
        try {
            const generatedWallet = await createConnectedWalletFromJson(jsonWallet,password,'mainnet')
            setWallet(generatedWallet)
            navigate('/wallet')
        }
        catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <InputPasswordForm onSubmit={onSubmit}/>
            <Button text='Forgot your password?'/>
        </>
    )
}

const Login:React.FC = () => {
    const { jsonWallet } = useWalletContextValue()
    useEffect(() => console.log(jsonWallet),[jsonWallet])
    return( 
        <SimpleLayout>
            <div className='container h-[475px]'>
                <div className='flex flex-col h-[100%] justify-center items-center'>
                    <img src={logo256} alt='Xfolio Logo 256 px'></img>
                    <p className='text-3xl mb-3.5'>Welcome to Xfolio!</p>
                    {
                        jsonWallet === '' 
                            ? <SignUpForm/>
                            : <LoginForm/>
                    }
                </div>
            </div>
        </SimpleLayout>
    )
}

export default Login