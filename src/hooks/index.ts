import { useContext, useState, useMemo } from 'react'
import { WalletContext } from '../context/walletContext'
import { Wallet } from 'ethers'

export const useDefineWalletContext = () => {
    const [jsonWallet, setJsonWallet] = useState<string>('')
    const [wallet, setWallet] = useState<undefined | Wallet>(undefined)

    return useMemo(() => ({
        jsonWallet,
        setJsonWallet,
        wallet,
        setWallet
    }), [
        jsonWallet,
        wallet
    ])
}

export const useWalletContextValue = () => {
    const walletContext = useContext(WalletContext)
    if (!walletContext) {
        throw new Error('useWalletContext must be used within the WalletContext.Provider')
    }
    return walletContext
}