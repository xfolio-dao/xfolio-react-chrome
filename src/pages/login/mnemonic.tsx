import React from 'react'
import { useParams } from 'react-router-dom'
import SimpleLayout from '../../components/Layout/simple'
import CreateWalletForm from '../../components/Input/createWalletForm'
import ImportWalletForm from '../../components/Input/importWalletForm'

const Mnemonic:React.FC = () => {
    const { status } = useParams()
    return(
        <SimpleLayout>
            <div className='container h-[475px]'>
                {
                    status === 'create'
                        ? <CreateWalletForm/>
                        : <ImportWalletForm/>
                }
            </div>
        </SimpleLayout>
    )
}

export default Mnemonic