import useLocalStorage from "./localStorage";

const useDarkMode = (initialValue) =>{
  const [values, setValues] = useLocalStorage('dark mode', initialValue)
  return([values, setValues]);
}
export default useDarkMode;