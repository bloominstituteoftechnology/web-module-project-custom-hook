import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
    const [useDarkMode, setUseDarkMode] = useLocalStorage('dark-mode', false)

    return [useDarkMode, setUseDarkMode]
}

export default useDarkMode