import useLocalStorage from './useLocalStorage';
import useMedia from './useMedia';

const useDarkMode = (initialValue = false) => {

  const prefersDarkMode = useMedia(['(prefers-color-scheme: dark)'], [true], false);

  const [someValue, setSomeValue] = useLocalStorage('Dark Mode', prefersDarkMode || initialValue);

  return([someValue, setSomeValue]);

};

export default useDarkMode;
