import useLocalStorage from "./useLocalStorage"


const useDarkMode = () => {
    const [value, setValue] = useLocalStorage("goingDark", false);

    const handleChange = () => {
        setValue({
            ...value,
            goingDark: !value.goingDark
        });
    };

    return [value, handleChange]
}

export default useDarkMode;