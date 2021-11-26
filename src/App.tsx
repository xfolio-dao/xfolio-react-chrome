import React, { Fragment } from 'react'
import { Route, Routes, MemoryRouter as Router } from 'react-router-dom'
import Wallet from './pages/wallet'
import Login from './pages/login'
import Settings from './pages/settings'
import { WalletContext } from './context/walletContext'
import { useDefineWalletContext } from './hooks'
import Mnemonic from './pages/login/mnemonic'
import SetPassword from './pages/login/setPassword'
import { WalletContextType } from './types'

const App = () => {
    const walletContextValue = useDefineWalletContext()

    return (
        <WalletContext.Provider value={walletContextValue as WalletContextType}>
            <Router
                initialEntries={['/login']}
                initialIndex={0}
            >
                <Fragment>
                    <Routes>
                        <Route path='/login' element={ <Login/> }/>
                        <Route path='/wallet' element={ <Wallet/> }/>
                        <Route path='/settings' element={ <Settings/> }/>
                        <Route path='/mnemonic'>
                            <Route path=':status' element={ <Mnemonic/> }/>
                        </Route>
                        <Route path='/setPassword' element={ <SetPassword/> }/>
                    </Routes>
                </Fragment>
            </Router>
        </WalletContext.Provider>
    )
}

export default App