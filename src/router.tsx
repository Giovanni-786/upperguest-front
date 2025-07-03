import { Suspense } from 'react'

import App from './App'
import { createBrowserRouter } from 'react-router'

import Explore from './pages/Explore/Explore'
import Register from './pages/Register/Register'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [     
      {
        path: '/',
        element: (
          <Suspense>
            <Explore />
          </Suspense>
        ),
      },
      {
        path: '/cadastro',
        element: (
          <Suspense>
            <Register />
          </Suspense>
        ),
      }
    ],
  },
])
export default router
