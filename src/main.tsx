import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import './index.css'
import ErrorPage from './pages/error/page.tsx'
import { Toaster } from '@/components/ui/sonner'
import SharedPage from './pages/shared/page.tsx'
import LinkDetailPage from './pages/link-detail/page.tsx'
import FolderPage from './pages/folder/page.tsx'
import HomePage from './pages/home/page.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/shared', element: <SharedPage /> },
      { path: '/folder', element: <FolderPage /> },
      { path: '/links/:linkId', element: <LinkDetailPage /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster position='top-center' />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
