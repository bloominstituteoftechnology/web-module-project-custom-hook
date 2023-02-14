import {useState} from 'react'
import useLocalStorage from './useLocalStorage';
 const useDarkMode = (initialValue) => {
   const [darkMode, setDarkMode] = useLocalStorage('darkmode',initialValue);
   return [darkMode, setDarkMode]
 }

 export default useDarkMode;