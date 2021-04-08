import { useState } from 'react';

const useLocalStorage = (myData, initialValue) => {

    const [ myData, setMyData ] = useState(()=> {
        if (coinData.data !== []) {
        return setMyData(useState(myData));
        }
    );
    
    const setLocalStorageValue = value => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
    }

    return [value, setLocalStorageValue];
    }
  
    export default useLocalStorage;
    //  When we create state, check to see if that value is in localStorage
    //  If it does, put that into our state value
    //  If it does not, put our initialValue into state AND localStorage
    //  When we update our state, save that update to localStorage
  
    // const [ value, setValue ] = useState(initialValue);
  
    