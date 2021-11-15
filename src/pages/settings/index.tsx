import React from 'react'
import DefaultLayout from '../../components/Layout'
import { Link } from 'react-router-dom'

const Settings:React.FC = () => {
    return(
        <DefaultLayout>
            <div className="container h-[475px]">
                <div> This is a settings screen!</div>
                <Link to='/login'>Log me out!</Link>
            </div>
        </DefaultLayout>
    )
}

export default Settings