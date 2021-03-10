import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
	const [isDark, setIsDark] = useLocalStorage('isDark', false);
	return [isDark, setIsDark];
};

export default useDarkMode;
