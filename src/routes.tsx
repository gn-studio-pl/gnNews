import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import App from './App'
import routes from './routes.config'

const AppRoutes = () => {
  const location = useLocation()

  return (
    <App>
      <Routes location={location}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </App>
  )
}

export default AppRoutes
