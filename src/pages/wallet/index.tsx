import React from 'react'
import DefaultLayout from '../../components/Layout'
import { useWalletContextValue } from '../../hooks'

const Wallet:React.FC = () => {
    const { wallet } = useWalletContextValue()
    return(
        <DefaultLayout>
            <div className="container h-[475px]">
                <p>Wallet Address:</p>
                <p>{ wallet.address }</p>
            </div>
        </DefaultLayout>
    )
}

export default Wallet