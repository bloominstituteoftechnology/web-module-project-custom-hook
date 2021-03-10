import {useState} from 'react';

const LocalStorage = (key, initialValue) => {

    const [value, setValue] = useState(()=> {
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        }
        localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
    })

    const setLocalValue = value => {
        setValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    return [value, setLocalValue]
}

export default LocalStorage;