export interface JsonWalletState {
    seed: string
}

export interface JsonWalletAction {
    type: 'SET_SEED',
    data: string
}

const initialState:JsonWalletState = {
    seed: ''
}

// Reducer
const jsonWalletReducer = (state:JsonWalletState = initialState, action:JsonWalletAction):JsonWalletState => {
    switch (action.type) {
    case 'SET_SEED':
        return {
            seed: action.data
        }
    default:
        return state
    }
}

// Actions
export const setJsonWallet = (seed:string):JsonWalletAction => {
    return {
        type: 'SET_SEED',
        data: seed
    }
}

export default jsonWalletReducer