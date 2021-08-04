import { useState } from 'react'

const useLocalStorage = (key, initValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if(localStorage.getItem(key)){
            return JSON.parse(localStorage.getItem(key))
        }
        return initValue
    })

    const setValue = value => {

        setStoredValue(value)

        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return [storedValue, setValue]
}

export default useLocalStorage