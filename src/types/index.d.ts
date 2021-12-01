import { Wallet } from 'ethers'

export type SupportedNetworkName = 'mainnet' | 'arbitrum' | 'optimism' | 'kovan' | 'fuji'

interface WalletContextType {
    jsonWallet: string, 
    wallet: Wallet,
    setJsonWallet: (jsonWallet:string) => void,
    setWallet: (wallet:Wallet) => void
}