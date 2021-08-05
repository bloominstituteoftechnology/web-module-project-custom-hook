import useLocalStorage from "./useLocalStorage";

const useDarkMode = (value) => {
  const [someValue, setSomeValue] = useLocalStorage("darkModeKey",value);
  return [someValue, setSomeValue];
};

export default useDarkMode;
