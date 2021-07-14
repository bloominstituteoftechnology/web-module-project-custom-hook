import useLocalStorage from "./useLocalStorage";

const useDarkMode = (value) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", value);
  return [darkMode, setDarkMode];
};

export default useDarkMode;
