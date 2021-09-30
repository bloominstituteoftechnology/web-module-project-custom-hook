
import { useLocalStorage } from './useLocalStorage'

export default function useDarkMode(key){
    const [values, setValues] = useLocalStorage(key)
    return[values, setValues];
}