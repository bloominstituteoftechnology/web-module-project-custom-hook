import useLocalStorage from './useLocalStorage'

export default function useDarkMode(key) {
    const [someValue, setSomeValue] = useLocalStorage(key)
    return [someValue, setSomeValue]
}