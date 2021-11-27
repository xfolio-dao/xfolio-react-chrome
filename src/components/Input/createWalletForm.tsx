import React, { useState, useEffect } from 'react'
import { useWalletContextValue } from '../../hooks'
import { createConnectedRandomWallet } from '../../utils/ethers'
import MnemonicPhraseView from '../../components/MnemonicPhraseView'
import Button from '../../components/Button'
import { Text3Xl } from '../../components/Text'
import { useNavigate } from 'react-router'

const CreateWalletForm:React.FC = () => {
    const [mnemonic, setMnemonic] = useState('')
    const navigate = useNavigate()
    const { setWallet } = useWalletContextValue()

    useEffect(() => {
        const newMainnetWallet = createConnectedRandomWallet('mainnet')
        setMnemonic(newMainnetWallet.mnemonic.phrase)
        setWallet(newMainnetWallet)
    },[])

    return(
        <div className='flex flex-col justify-center items-center'>
            <Text3Xl text='Your new mnemonic phrase is:'/>
            <MnemonicPhraseView phrase={mnemonic}/>
            <Text3Xl text='Make sure to write it down, because this phrase will be used for the recovery of your accounts in case you forget the password'/>
            <Button text='Set up your password' handleClick={() => navigate('/setPassword')}/>
        </div> 
    )
}

export default CreateWalletForm