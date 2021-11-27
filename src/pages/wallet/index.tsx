import React from 'react'
import DefaultLayout from '../../components/Layout'
import { useWalletContextValue } from '../../hooks'
import { useEthBalance } from '../../hooks/useEth'
import { connectWalletToNetwork } from '../../utils/ethers'

const Wallet:React.FC = () => {
    const { wallet } = useWalletContextValue()
    const balance = useEthBalance(wallet)
    //fix later with proper API calls on multiple chains
    const arbitrumBalance = useEthBalance(connectWalletToNetwork(wallet,'arbitrum'))
    const optimismBalance = useEthBalance(connectWalletToNetwork(wallet,'optimism'))

    return(
        <DefaultLayout>
            <div className="container h-[475px]">
                <p>Wallet Address:</p>
                <p>{ wallet.address }</p>
                <p>Your mainnet balance:</p>
                <p>{ balance }</p>
                {
                    arbitrumBalance !== '0.000' && arbitrumBalance !== '0'
                        ? <div> <p>Your arbitrum balance:</p>
                            <p>{ arbitrumBalance}</p>
                        </div>
                        : null
                }
                {
                    optimismBalance !== '0.000' && optimismBalance !== '0'
                        ? <div> <p>Your optimism balance:</p>
                            <p>{ optimismBalance}</p>
                        </div>
                        : null
                }
                
            </div>
        </DefaultLayout>
    )
}

export default Wallet