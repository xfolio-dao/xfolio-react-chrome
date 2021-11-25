import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SimpleLayout from '../../components/Layout/simple'
import { useWalletContextValue } from '../../hooks'
import { createConnectedRandomWallet } from '../../utils/ethers'
import MnemonicPhraseView from '../../components/MnemonicPhraseView'

const CreateWalletForm:React.FC = () => {
    const [mnemonic, setMnemonic] = useState('')
    const { setWallet } = useWalletContextValue()

    useEffect(() => {
        const newMainnetWallet = createConnectedRandomWallet('mainnet')
        setMnemonic(newMainnetWallet.mnemonic.phrase)
        setWallet(newMainnetWallet)
    },[])

    return(
        <div>
            <p>Your mnemonic is:</p>
            <MnemonicPhraseView phrase={mnemonic}/>
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