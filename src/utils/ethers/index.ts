import { ethers, Wallet } from 'ethers'
import { MAINNET_API_KEY, ARBITRUM_API_KEY, OPTIMISM_API_KEY, KOVAN_API_KEY } from '../../constants'
import { SupportedNetworkName } from '../../types'

export const createRandomWallet = ():Wallet => {
    return ethers.Wallet.createRandom()
}

export const createJsonRpcProvider = (networkName:SupportedNetworkName):ethers.providers.JsonRpcProvider => {
    switch(networkName) {
    case 'mainnet':
        return new ethers.providers.JsonRpcProvider(MAINNET_API_KEY)
    case 'arbitrum':
        return new ethers.providers.JsonRpcProvider(ARBITRUM_API_KEY)
    case 'optimism':
        return new ethers.providers.JsonRpcProvider(OPTIMISM_API_KEY)
    case 'kovan':
        return new ethers.providers.JsonRpcProvider(KOVAN_API_KEY)
    case 'fuji':
        return new ethers.providers.JsonRpcProvider(KOVAN_API_KEY)
    }
}

export const connectWalletToNetwork = (wallet:Wallet, networkName:SupportedNetworkName):Wallet => {
    const jsonRpcProvider = createJsonRpcProvider(networkName)
    return wallet.connect(jsonRpcProvider)
}

export const createConnectedRandomWallet = (networkName:SupportedNetworkName):Wallet => {
    const newWallet = createRandomWallet()
    const jsonRpcProvider = createJsonRpcProvider(networkName)
    return newWallet.connect(jsonRpcProvider)
}

export const createConnectedWalletFromMnemonic = (mnemonic:string, networkName:SupportedNetworkName):Wallet => {
    const jsonRpcProvider = createJsonRpcProvider(networkName)
    return ethers.Wallet.fromMnemonic(mnemonic).connect(jsonRpcProvider)
}

export const createConnectedWalletFromJson = async (jsonWallet:string, password:string, networkName:SupportedNetworkName):Promise<Wallet> => {
    const jsonRpcProvider = createJsonRpcProvider(networkName)
    const fromJsonWallet = await ethers.Wallet.fromEncryptedJson(jsonWallet,password)
    return fromJsonWallet.connect(jsonRpcProvider)
} 

export const getTokenLogoURL = (address: string):string => {
    const modifiedAddress = ethers.utils.getAddress(address)
    return `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${modifiedAddress}/logo.png`
}