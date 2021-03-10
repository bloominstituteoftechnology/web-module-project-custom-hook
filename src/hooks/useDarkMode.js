import React from 'react';
import useLocalStorage from './useLocalStorage'

const useDarkMode = () =>{
const [darkmode, setDarkMode] = useLocalStorage("key");


return [darkmode, setDarkMode]
}
export default useDarkMode;