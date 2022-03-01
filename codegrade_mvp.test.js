import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './frontend/App'

jest.setTimeout(750) // default 5000 too long for Codegrade
const waitForOptions = { timeout: 150 }
const queryOptions = { exact: false }

const renderApp = ui => {
  window.localStorage.clear()
  return render(ui)
}
beforeEach(() => {
  renderApp(<App />)
})

const appWrapper = () => document.querySelector('.App')
const toggleBtn = () => document.querySelector('.toggle')

describe('dark mode', () => {
  test('button toggles the "dark-mode" class name', () => {
    expect(appWrapper().className).toBe('App')
    fireEvent.click(toggleBtn())
    expect(appWrapper().className).toMatch(/dark-mode/)
  })
})
