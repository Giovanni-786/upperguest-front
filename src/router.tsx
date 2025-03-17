import { Suspense } from 'react'

import App from './App'
import { createBrowserRouter } from 'react-router'

import Explore from './pages/Explore/Explore'
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
      }
    ],
  },
])
export default router
