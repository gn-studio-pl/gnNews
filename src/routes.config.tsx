import React, { createRef, Suspense } from 'react'

const Home = React.lazy(() => import('./pages/Home'))
const Content = React.lazy(() => import('./layout/Content'))

const routes = [
  {
    path: '/',
    name: 'Home',
    element: (
      <Suspense fallback={<p>loading...</p>}>
        <Home />
      </Suspense>
    ),
    nodeRef: createRef()
  },
  {
    path: '/country/:id',
    name: 'Content',
    element: (
      <Suspense fallback={<p>loading...</p>}>
        <Content />
      </Suspense>
    ),
    nodeRef: createRef()
  }
]

export default routes
