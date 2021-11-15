import React from 'react'
import Header from '../Header'
import { LayoutProps } from '.'

const SimpleLayout: React.FC<LayoutProps> = ({ children }) => {
    return(
        <div>
            <Header/>
            {children}
        </div>
    )
}
export default SimpleLayout