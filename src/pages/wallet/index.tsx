import React from 'react'
import DefaultLayout from '../../components/Layout'
import { useWalletContextValue } from '../../hooks'
import { useEthBalance } from '../../hooks/useEth'

const Wallet:React.FC = () => {
    const { wallet } = useWalletContextValue()
    const balance = useEthBalance(wallet)

    return(
        <DefaultLayout>
            <div className="container h-[475px]">
                <p>Wallet Address:</p>
                <p>{ wallet.address }</p>
                <p>Your mainnet balance:</p>
                <p>{ balance }</p>
            </div>
        </DefaultLayout>
    )
}

export default Wallet