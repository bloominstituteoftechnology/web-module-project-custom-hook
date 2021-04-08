import { useState } from "react";

const useLocalStorage = (key, value) => {
	const [darkMode, setDarkMode] = useState(() => {
		const item = window.localStorage.getItem(key);
		return item ? JSON.parse(item) : value;
	});
	const setValue = (value) => {
		setDarkMode(value);
		window.localStorage.setItem(key, JSON.stringify(value));
	};
	return [darkMode, setValue];
};

export default useLocalStorage;
