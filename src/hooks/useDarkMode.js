
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValues) => {
    const [value, setValue] = useLocalStorage(initialValues);


    return ([value, setValue]);
}

export default useDarkMode;