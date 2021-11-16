import React, { useState } from 'react'
import { Wallet, } from 'ethers'

export const WalletContext = React.createContext(null)

const WalletContextProvider: React.FC = ({ children }) => {
    const [wallet, setWallet] = useState<Wallet>()
    const [jsonWallet, setJsonWallet] = useState<string>()

    const updateWallet = (_wallet: Wallet) => {
        setWallet(_wallet)
    }
    const updateJsonWallet = (_jsonWallet: string) => {
        setJsonWallet(_jsonWallet)
    }

    return(
        <>
            { children }
        </>
    )
}

export default WalletContextProvider