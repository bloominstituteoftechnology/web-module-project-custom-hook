//Import statement
import { useLocalStorage } from "./useLocalStorage";

//Custom hook, pass in a "key". This key is the boolean value
//from index.js> const [darkMode, setDarkMode] = useDarkMode(false);
export const useDarkMode = (key) =>
{
    console.log("🚀 ~ file: UseDarkMode.js ~ line 7 ~ key", key)
    
    //Declare state, init to modeToggle (key) and initialValue
    const [mode, setMode] = useLocalStorage( key)

    //Return array containing the mode and setter to change mode
    console.log("🚀 ~ file: UseDarkMode.js ~ line 18 ~ mode, setMode", mode, setMode)
    return [mode, setMode];

}
    
