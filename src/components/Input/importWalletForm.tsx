import React, { useState, useEffect } from 'react'
import { Text3Xl } from '../Text'
import { Formik, Form } from 'formik'
import Button from '../Button'
import MnemonicPhraseView from '../MnemonicPhraseView'
import { useWalletContextValue } from '../../hooks'
import { createConnectedWalletFromMnemonic } from '../../utils/ethers'
import { useNavigate } from 'react-router'

const ImportWalletForm:React.FC = () => {
    const { setWallet } = useWalletContextValue()
    const navigate = useNavigate()
    const [currentPhrase,setCurrentPhrase] = useState('')
    const [isReadOnly,setIsReadOnly] = useState(false)

    useEffect(() => {
        if (currentPhrase.split(' ').length === 12) {
            setIsReadOnly(true)
        }
    },[currentPhrase])

    const onSubmit = () => {
        try {
            const newWallet = createConnectedWalletFromMnemonic(currentPhrase,'mainnet')
            setWallet(newWallet)
            navigate('/setPassword')
        } catch (e) {
            console.error(e)
        }
    }

    return(
        <>
            <Formik initialValues={{ phraseWord:'' }} onSubmit={onSubmit}>
                <Form>
                    <div className='flex flex-col justify-start items-center'>
                        <Text3Xl text='Import a wallet with your mnemonic phrase:'></Text3Xl>
                        <input
                            name='phraseWord'
                            className='text-[18px] rounded-sm border-2 border-black my-2'
                            type='text'
                            autoCapitalize='none'
                            readOnly={isReadOnly}
                            placeholder='Input your mnemonic...'
                            onChange={(event) => {
                                const val = event.target.value
                                if (val !== ' ') {
                                    if (val.slice(-1) === ' ') {
                                        if (currentPhrase === '') {
                                            setCurrentPhrase(currentPhrase.concat(val.slice(0, val.length - 1)))
                                        } else {
                                            setCurrentPhrase(currentPhrase.concat(' ', val.slice(0, val.length - 1)))
                                        }
                                        event.target.value = ''
                                    }
                                }
                            }}
                        />
                        <MnemonicPhraseView phrase={currentPhrase}/>
                        <Button type='submit' text='Import your wallet'/>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default ImportWalletForm