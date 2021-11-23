import React from 'react'
import SimpleLayout from '../../components/Layout/simple'
import { Link } from 'react-router-dom'
import { useWalletContextValue } from '../../hooks'
import { useMoralis } from 'react-moralis'

const Login:React.FC = () => {
    const { authenticate } = useMoralis()
    const { jsonWallet } = useWalletContextValue()

    return( 
        <SimpleLayout>
            <div className="container h-[475px]">
                {
                    jsonWallet === ' ' 
                        ? <div>Oy mate this is your first time in Xfolio, welcome!</div>
                        : <div>It is nice to see you again friend!</div>
                }
                <Link to='/wallet'>Sign me in!</Link>
                <button onClick={() => authenticate()}>Authenticate</button>
            </div>
        </SimpleLayout>
    )
}

export default Login