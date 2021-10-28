import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValue) => {
    
    const [value, setValue] = useLocalStorage('dark', initialValue);

    return [value, setValue];
}

export default useDarkMode;