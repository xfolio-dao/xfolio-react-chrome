import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SimpleLayout from '../../components/Layout/simple'
import { useWalletContextValue } from '../../hooks'
import { createConnectedRandomWallet } from '../../utils/ethers'
import MnemonicPhraseView from '../../components/MnemonicPhraseView'
import Button from '../../components/Button'

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
            <p>Your mnemonic is:</p>
            <MnemonicPhraseView phrase={mnemonic}/>
            <Button text='Set up your password' handleClick={() => navigate('/setPassword')}/>
        </div> 
    )
}

const ImportWalletForm:React.FC = () => {
    return(
        <div>
            <p>Import a wallet</p>
        </div>
    )
}

const Mnemonic:React.FC = () => {
    const { status } = useParams()
    return(
        <SimpleLayout>
            <div className='container h-[475px]'>
                {
                    status === 'create'
                        ? <CreateWalletForm/>
                        : <ImportWalletForm/>
                }
            </div>
        </SimpleLayout>
    )
}

export default Mnemonic