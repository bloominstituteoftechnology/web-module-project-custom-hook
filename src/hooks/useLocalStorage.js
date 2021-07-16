import { useState } from "react";

export const useLocalStorage =(key, initialValues) => {
    const [storedValue, setStoredValue] = useState(()=> {
        const item = window.localStorage.getItem(key)
        return item? JSON.parse(item) : initialValues
    })

    const setValue =(newValue) => {
        setStoredValue(newValue)
        localStorage.setItem(key, JSON.stringify(newValue))
    }
   
    
    return [storedValue,setValue] 
}