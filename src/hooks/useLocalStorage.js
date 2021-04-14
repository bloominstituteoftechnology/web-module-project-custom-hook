import { useState } from 'react'

const useLocalStorage = (key, value) => {
    const [newvalue, setNewValue] = useState(() =>{
        const item = window.localStorage.getItem(key)

        return item ? JSON.parse(item) : value
    })

    const setValue = value => {
        setNewValue(value)
        window.localStorage.setItem(key, JSON.stringify(value))
        console.log('test')
    }
    
    return [newvalue, setValue]
}

export default useLocalStorage;