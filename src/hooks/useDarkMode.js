import useLocalStorage from "./useLocalStorage";

const useDarkState = () =>{
    const[darkMode, setDarkMode]=useLocalStorage('darkmode',false)
    return([darkMode, setDarkMode]);
  }
export default useDarkState;