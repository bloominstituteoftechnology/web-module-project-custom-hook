import { useLocalStorage } from "./useLocalStorage";

const useDarkMode = (initialValues) => {
    const[values, setValues] = useLocalStorage("values", initialValues)

    return[values, setValues]
}
export default useDarkMode