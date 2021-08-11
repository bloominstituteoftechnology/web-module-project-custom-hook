import useLocalStorage from "./useLocalStorage";

export const useDarkMode = initialValue => {
const [someValue, setSomeValue] = useLocalStorage('values', initialValue)
return [someValue, setSomeValue];
}