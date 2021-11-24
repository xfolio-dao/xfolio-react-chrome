import React, { Fragment, useEffect } from 'react'
import { Route, Routes, MemoryRouter as Router } from 'react-router-dom'
import Wallet from './pages/wallet'
import Login from './pages/login'
import Settings from './pages/settings'
import { WalletContext } from './context/walletContext'
import { useDefineWalletContext } from './hooks'
import { useMoralis } from 'react-moralis'
import { initiateConnectedWeb3 } from './utils/web3'

const App = () => {
    const walletContextValue = useDefineWalletContext()
    const { Moralis, isWeb3Enabled } = useMoralis()

    useEffect(() => {
        const connectWeb3 = async () => {
            const mainnetWeb3 = initiateConnectedWeb3('mainnet')
            Moralis.Web3.setEnableWeb3(async () => mainnetWeb3)
            await Moralis.Web3.enableWeb3()
            // window.web3 = mainnetWeb3
            // enableWeb3()
            console.log(`Is web 3 enabled? ${isWeb3Enabled}`)
            console.log(Moralis.Web3)
        }
        connectWeb3()
    },[])

    return (
        <WalletContext.Provider value={walletContextValue}>
            <Router
                initialEntries={['/login','/wallet']}
                initialIndex={0}
            >
                <Fragment>
                    <Routes>
                        <Route path='/login' element={ <Login/> }/>
                        <Route path='/wallet' element={ <Wallet/> }/>
                        <Route path='/settings' element={ <Settings/> }/>
                    </Routes>
                </Fragment>
            </Router>
        </WalletContext.Provider>
    )
}

export default App