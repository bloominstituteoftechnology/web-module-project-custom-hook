import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
    const [dark, setDark] = useLocalStorage('dark-mode', 'true')
    return ([dark, setDark])
}

export default useDarkMode