import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key) => {
  const [darkMode, setDarkMode] = useLocalStorage(key);
  return [darkMode, setDarkMode];
};

export default useDarkMode;
