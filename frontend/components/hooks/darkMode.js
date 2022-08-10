import { useState, useEffect } from 'react';

const useDarkMode = (key, intitialValue) => {
    const [value, setValue] = useState(intitialValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
};

export default useDarkMode;