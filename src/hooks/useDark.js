import { useLocalStorage } from './useLocalStorage';

const useDarkMode = () => {
    const [isDark, setIsDark] = useLocalStorage('darkMode', false);
    return [isDark, setIsDark]
}

export default useDarkMode;