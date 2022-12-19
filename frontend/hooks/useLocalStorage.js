import { json } from "msw/lib/types/context";
import React, {useState} from "react";

export const useLocalStorage = (key, value) =>{
    const [storedValue, setStoredValue ] = useState(()=>{
        if(window.localStorage.getItem(key)){
            return json.parse(window.localStorage.getItem(key))
        }
        window.localStorage.setItem(key, json.stringify(value))
        return(value)
    })
    const setValue = value => {
        setStoredValue(value)
        window.localStorage.setItem(key,json.stringify(value))
    }
    return [storedValue, setValue]
}