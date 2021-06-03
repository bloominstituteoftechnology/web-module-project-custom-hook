
import { useState} from 'react';

export const useLocalStorage = (key, initialValue) => {

    const [value, setValue] = useState(()=> {
      const item =  window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue;
      })

      const newValue = (value) => {
        window.localStorage.setItem(key, value) 
        setValue(value)
      }




      return [value, newValue];




    }
  
  

        //value is updated thats going to cause our component to rerender and update the ui base on the new value.
    // All base on the state property and its important for react to keep track on thoses change with ui
  // if adda return [storeValue, setStoreValue] it will only update eveything in the setValue not in the localstorage

