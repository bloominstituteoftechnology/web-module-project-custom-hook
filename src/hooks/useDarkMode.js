import useLocalStorage from  "./useLocalStorage";

export const useDarkmode = initialValue => {
    const [someValue, setSomeValue] = useLocalStorage('values', initialValue)
    return [someValue, setSomeValue];
};