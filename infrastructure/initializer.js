import { getStoreMe, setStoreMe } from 'store-me'

const LocalStorage = require('localstorage')
var db

export const Initializer = () => {
    const initialState = {
        isModalOpen: false,
        isAddTaskButtonDisabled: true,
        tasks: [],
    }

    setStoreMe(initialState)

    if (process.browser) {
        db = new LocalStorage('tasks')
        if (!isLocalStorageInitialized()) initializeLocalStorage()

        const localStorageTasks = db.get('myTask')[1]

        setStoreMe({ tasks: localStorageTasks })
    }

    return <></>
}

const isLocalStorageInitialized = () => {
    return typeof db.get('myTask')[1] != 'undefined'
}

const initializeLocalStorage = () => {
    db.put('myTask', [])
}
