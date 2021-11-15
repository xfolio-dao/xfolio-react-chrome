import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

export interface LayoutProps {
    children: React.ReactNode
}

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
    return(
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default DefaultLayout