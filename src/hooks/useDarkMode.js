import {UseLocalStorage} from './useLocalStorage'

export const useDarkMode = (initialValue) => {
const [value,setvalue] = UseLocalStorage("darkMode",initialValue)


return [value,setvalue]

}

