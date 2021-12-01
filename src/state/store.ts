import { createStore, combineReducers } from 'redux'
import walletReducer from './reducers/walletReducer'
import jsonWalletReducer from './reducers/jsonWalletReducer'

const rootReducer = combineReducers({
    wallet: walletReducer,
    jsonWallet: jsonWalletReducer
})

const store = createStore(rootReducer)

export default store