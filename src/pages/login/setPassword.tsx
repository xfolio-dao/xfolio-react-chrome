import React from 'react'
import SetPasswordForm from '../../components/Input/setPasswordForm'
import { useNavigate } from 'react-router-dom'
import { useWalletContextValue } from '../../hooks'
import SimpleLayout from '../../components/Layout/simple'

const SetPassword:React.FC = () => {
    const navigate = useNavigate()
    const { wallet, setJsonWallet } = useWalletContextValue()

    const onSubmit = async ({ password }: {password:string}) => {
        try {
            const jsonSeed = await wallet.encrypt(password)
            console.log(JSON.parse(jsonSeed))
            setJsonWallet(jsonSeed)
            navigate('/wallet')
        }
        catch (e) {
            console.error(e)
        }
    }

    return (
        <SimpleLayout>
            <SetPasswordForm onSubmit={onSubmit}/>
        </SimpleLayout>
    )
}

export default SetPassword