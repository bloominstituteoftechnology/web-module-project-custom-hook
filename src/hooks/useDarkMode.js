import useLocalStorage from "./useLocalStorage"

const formValues = {
    on: 'on',
    off: 'off'
}

export default function useDarkMode() {

    const [someValue, setSomeValue] = useLocalStorage(formValues)



      return [someValue,setSomeValue]

    
}