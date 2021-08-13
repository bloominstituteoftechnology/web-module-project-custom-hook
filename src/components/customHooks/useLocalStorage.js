import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		const item = window.localStorage.getItem(key);
		return item ? JSON.parse(item) : initialValue
	});

	const setValueLocalStorage = (newValue) => {
		setStoredValue(newValue)
		localStorage.setItem('value', JSON.stringify(newValue));
	}

	return [storedValue, setValueLocalStorage]

}

export default useLocalStorage