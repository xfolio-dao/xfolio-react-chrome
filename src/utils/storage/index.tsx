
export const returnInitialLocalState = (storageKey:string) => {
    try {
        const item = window.localStorage.getItem(storageKey)
        if (item) {
            if ((typeof item) === 'string') {
                return item
            } else {
                return JSON.parse(item)
            }
        } else {
            return null
        }
    } catch (error) {
        console.log(error)
        return null
    }
}