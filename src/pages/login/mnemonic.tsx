import React from 'react'
import { useParams } from 'react-router-dom'

const Mnemonic:React.FC = () => {
    const { status } = useParams()
    return(
        <div>
            {
                status === 'create'
                    ? <p>Create a wallet</p>
                    : <p>Import a wallet</p>
            }
        </div>
    )
}

export default Mnemonic