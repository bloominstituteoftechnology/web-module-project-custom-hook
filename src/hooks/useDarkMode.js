import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
	const [darkmode, setDarkMode] = useLocalStorage("darkMode", false);
	return [darkmode, setDarkMode];
};

export default useDarkMode;
