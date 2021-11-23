import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { MORALIS_APPLICATION_ID, MORALIS_SERVER_URL } from './constants'
import { MoralisProvider } from 'react-moralis'

ReactDOM.render(
    <MoralisProvider appId={MORALIS_APPLICATION_ID} serverUrl={MORALIS_SERVER_URL}>
        <App />
    </MoralisProvider>,
    document.getElementById('root')
)