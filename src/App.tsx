import React, { Fragment } from 'react'
import { Route, Routes, MemoryRouter as Router } from 'react-router-dom'
import Wallet from './pages/wallet'
import Login from './pages/login'

const App = () => {
    return (
    // <DefaultLayout>
    //     {/* <div className="container h-[475]">
    //         <p>
    //         Welcome to Xfolio!
    //         </p>
    //     </div> */}
    // </DefaultLayout>
        <Router
            initialEntries={['/login','/wallet']}
            initialIndex={0}
        >
            <Fragment>
                <Routes>
                    <Route path='/login' element={ <Login/> }/>
                    <Route path='/wallet' element={ <Wallet/> }/>
                </Routes>
            </Fragment>
        </Router>
    )
}

export default App