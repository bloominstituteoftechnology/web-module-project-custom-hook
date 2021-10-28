import {useLocalStorage} from './useLocalStorage';

const useDarkMode = (initialValue) => {
    const [value, setValue] = useLocalStorage('darkmode', initialValue);
    return [value, setValue];
};

export default useDarkMode;