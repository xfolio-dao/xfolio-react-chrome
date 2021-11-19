import React from 'react'
import SimpleLayout from '../../components/Layout/simple'
import { Link } from 'react-router-dom'
import { useWalletContextValue } from '../../hooks'

const Login:React.FC = () => {
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
            </div>
        </SimpleLayout>
    )
}

export default Login