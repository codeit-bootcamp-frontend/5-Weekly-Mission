import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import './index.css'
import ErrorPage from './pages/error/page.tsx'
import LinkPage from './pages/link/page.tsx'
import { Toaster } from '@/components/ui/sonner'
import FolderPage from './pages/folder/page.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <FolderPage /> },
      { path: 'link/:linkId', element: <LinkPage /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster position='top-center' />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
