import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
import { Routes } from 'react-router-dom'

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App>
        <Routes></Routes>
      </App>
    </Provider>
  )

  expect(getByText(/learn/i)).toBeInTheDocument()
})
