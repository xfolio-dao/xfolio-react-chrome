import Web3 from 'web3'
import { SupportedNetworkName } from '../../types'
import { ARBITRUM_API_KEY, MAINNET_API_KEY, OPTIMISM_API_KEY } from '../../constants'

export const initiateWeb3 = (url:string):Web3 => {
    return new Web3(url)
}

export const initiateConnectedWeb3 = (networkName:SupportedNetworkName) => {
    switch (networkName) {                                                           
    case 'mainnet':
        return new Web3(MAINNET_API_KEY)
    case 'optimism':
        return new Web3(OPTIMISM_API_KEY)
    case 'arbitrum':
        return new Web3(ARBITRUM_API_KEY)
    }
}