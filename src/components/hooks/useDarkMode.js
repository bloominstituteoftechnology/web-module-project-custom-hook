import useLocalStorage from './useLocalStorage'


const useDarkMode= ()=>{
    const [darkMode,setDarkMode] = useLocalStorage("DarkToggle",false)
    return [darkMode, setDarkMode]
}

export default useDarkMode