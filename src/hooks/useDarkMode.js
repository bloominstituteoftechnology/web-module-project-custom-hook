import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue) => { //passing in the key I'm using in the local storage
    const [storedValue, setValue] = useLocalStorage('key', initialValue); // passing in the key I'm using in the local storage
    //console.log('useDarkModeFiring');

   
    return [storedValue, setValue];
    


};