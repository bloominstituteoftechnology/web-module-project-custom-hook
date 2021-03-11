import { useState } from 'react'
import useLocalStorage from './useLocalStorage.js'
const useDarkMode = (key) => {
    const [someValue, setSomeValue] = useLocalStorage(key, false)
    return [someValue, setSomeValue];
};
export default useDarkMode;