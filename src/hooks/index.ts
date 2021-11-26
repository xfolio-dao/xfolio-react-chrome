import { useContext, useState, useMemo } from 'react'
import { WalletContext } from '../context/walletContext'
import { Wallet } from 'ethers'
import { returnInitialLocalState } from '../utils/storage'

export const useLocalStorage = (storageKey:string) => {
    const [storedValue, setStoredValue] = useState(returnInitialLocalState(storageKey))
    const setValue = (value:any) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore = value instanceof Function ? value(storedValue) : value
            if (typeof valueToStore === 'string') {
                window.localStorage.setItem(storageKey, valueToStore)
            }
            else {
                window.localStorage.setItem(storageKey, JSON.stringify(valueToStore))
            }
            // Save state
            setStoredValue(valueToStore)
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error)
        }
    }
    return [storedValue, setValue]
}

export const useDefineWalletContext = () => {
    const [jsonWallet, setJsonWallet] = useLocalStorage('jsonWallet')
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