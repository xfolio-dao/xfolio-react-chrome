import React from 'react'
import SimpleLayout from '../../components/Layout/simple'
import { Link } from 'react-router-dom'

const Login:React.FC = () => {
    return(
        <SimpleLayout>
            <div className="container h-[475px]">
                <div> This is a login screen!</div>
                <Link to='/wallet'>Sign me in!</Link>
            </div>
        </SimpleLayout>
    )
}

export default Login