import React, { Fragment } from 'react'
import { Route, Routes, MemoryRouter as Router } from 'react-router-dom'
import Wallet from './pages/wallet'
import Login from './pages/login'
import Settings from './pages/settings'

const App = () => {
    return (
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
    )
}

export default App