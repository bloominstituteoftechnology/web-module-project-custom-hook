import React from 'react'
import useLocalStorage from './useLocalStorage'

function useDarkMode(){
    const [someValue, setSomeValue] = useLocalStorage('your key here')
}