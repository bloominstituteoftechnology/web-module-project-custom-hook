import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkModeOn')
       
    
return [darkMode, setDarkMode ]

}


