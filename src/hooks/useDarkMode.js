import useLocalStorage from './useLocalStorage'
import useMedia from './useMedia'

const usePrefersDarkMode = () => {
    return useMedia(
        ['(prefers-color-scheme: dark)'],
        [true],
        false
    )
}

const useDarkMode = () => {
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useLocalStorage('dark-mode', false)
    const prefersDarkMode = usePrefersDarkMode()

    const enabled = typeof isDarkModeEnabled !== 'undefined'
        ? isDarkModeEnabled : prefersDarkMode

    return [enabled, setIsDarkModeEnabled]
}

export default useDarkMode