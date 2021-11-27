import { useCallback, useEffect, useState, useRef } from 'react'
import { Signer, utils } from 'ethers'

export const useEthBalance = (signer:Signer) => {
    const [balance, setBalance] = useState('0')
    const prevBalanceRef = useRef('0')

    const fetchBalance = useCallback(async () => {
        const address = await signer.getAddress()
        console.log(address)
        const rawBalance = await signer.getBalance()
        console.log(rawBalance)
        const value = parseFloat(utils.formatEther(rawBalance)).toPrecision(4)
        setBalance(value)
        if (value !== prevBalanceRef.current) {
            prevBalanceRef.current = value
            setBalance(value)
        }
    }, [])

    useEffect(() => {
        fetchBalance()
    }, [fetchBalance])

    return balance
}