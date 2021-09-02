
import {useState} from 'react';

export const UseLocalStorage = (key,initialValue) => {
 const [storedValue,setStoredValue] = useState (()=>{
     const item = window.localStorage.getItem(key);
     return item ?  JSON.parse(item) : initialValue
            
       

 })
 const setvalue = (value) => {
     window.localStorage.setItem(key, value);
     setStoredValue(value)
 }



 return [storedValue,setvalue] 

}


