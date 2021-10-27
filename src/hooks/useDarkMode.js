import useLocalStorage from "./useLocalStorage"

const useDarkMode = (initialValues) => {

    const [values, setValues] = useLocalStorage("form", initialValues);
}