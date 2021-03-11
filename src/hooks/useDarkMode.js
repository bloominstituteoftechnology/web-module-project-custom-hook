import useLocalStorage from './useLocalStorage'

const useDarkMode = (initialValue) =>{
const [darkmode, setDarkMode] = useLocalStorage("key", initialValue);


return [darkmode, setDarkMode]
}
export default useDarkMode;