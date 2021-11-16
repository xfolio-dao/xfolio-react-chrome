import { ethers, Wallet } from 'ethers'
import { MAINNET_API_KEY, ARBITRUM_API_KEY, OPTIMISM_API_KEY } from '../../constants'
import { SupportedNetworkName } from '../../types'

export const createRandomWallet = ():Wallet => {
    return ethers.Wallet.createRandom()
}

export const createAlchemyProvider = (networkName:SupportedNetworkName):ethers.providers.AlchemyProvider => {
    switch(networkName) {
    case 'mainnet':
        return new ethers.providers.AlchemyProvider('homestead',MAINNET_API_KEY)
    case 'arbitrum':
        return new ethers.providers.AlchemyProvider('arbitrum_mainnet',ARBITRUM_API_KEY)
    case 'optimism':
        return new ethers.providers.AlchemyProvider('optimism_mainnet',OPTIMISM_API_KEY)
    }
}

export const connectWalletToNetwork = (wallet:Wallet, networkName:SupportedNetworkName):Wallet => {
    const newAlchemyProvider = createAlchemyProvider(networkName)
    return wallet.connect(newAlchemyProvider)
}

export const createConnectedWalletFromMnemonic = (mnemonic:string, networkName:SupportedNetworkName):Wallet => {
    const newAlchemyProvider = createAlchemyProvider(networkName)
    return ethers.Wallet.fromMnemonic(mnemonic).connect(newAlchemyProvider)
}

export const createConnectedWalletFromJson = async (jsonWallet:string, password:string, networkName:SupportedNetworkName):Promise<Wallet> => {
    const newAlchemyProvider = createAlchemyProvider(networkName)
    const fromJsonWallet = await ethers.Wallet.fromEncryptedJson(jsonWallet,password)
    return fromJsonWallet.connect(newAlchemyProvider)
} 

export const getTokenLogoURL = (address: string):string => {
    const modifiedAddress = ethers.utils.getAddress(address)
    return `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${modifiedAddress}/logo.png`
}