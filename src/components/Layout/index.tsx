import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

interface Props {
    children: React.ReactNode
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
    return(
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default DefaultLayout