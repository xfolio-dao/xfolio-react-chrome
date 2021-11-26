
export const returnInitialLocalState = (storageKey:string) => {
    try {
        // Get from local storage by key
        const item = window.localStorage.getItem(storageKey)
        // Parse stored json or if none return an empty object
        // return item ? JSON.parse(item) : {}
        return item
    } catch (error) {
        // If error also return an empty object
        console.log(error)
        // return {}
        return ''
    }
}

export const returnInitialSessionState = (storageKey:string) => {
    try {
        // Get from local storage by key
        const item = window.sessionStorage.getItem(storageKey)
        // Parse stored json or if none return an empty object
        return item ? JSON.parse(item) : {}
    } catch (error) {
        // If error also return an empty object
        console.log(error)
        return {}
    }
}