import {useLocalStorage} from './useLocaleStorage'

export const useDarkMode = (key) => {
    const [value, setValue] = useLocalStorage(key)
    return ([value, setValue])
}