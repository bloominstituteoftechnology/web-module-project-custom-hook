import {useState} from 'react'

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        // THIS WORKS ALSO AND LESS CODE
        // const item = localStorage.getItem(key)
        // return item ? JSON.stringify(item) : initialValue
        
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key))
        }
        // localStorage.setItem(key, JSON.stringify(initialValue))
        return(initialValue)
    });

    const setValue = value => {
        setStoredValue(value)
        localStorage.setItem(key, JSON.stringify(value))
    }
    return ([storedValue, setValue])

}
export default useLocalStorage