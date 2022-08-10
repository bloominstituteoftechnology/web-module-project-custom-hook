import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (intitialValue) => {
    const [value, setValue] = useLocalStorage('toggle', intitialValue);


    return [value, setValue];
};

export default useDarkMode;