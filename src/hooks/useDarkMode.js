import useLocalStorage from './useLocalStorage.js';

const useDarkMode = (initialValues) => {

    const [isDarkModeOn, setIsDarkModeOn] = useLocalStorage('isDarkModeOn', initialValues)

    return [isDarkModeOn, setIsDarkModeOn];
}

export default useDarkMode;