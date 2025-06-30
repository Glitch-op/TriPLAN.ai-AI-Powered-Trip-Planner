import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Plantrip from './plan-trip/index.jsx'
import Navbar from './components/custom/Navbar.jsx'
import { Toaster } from "@/components/ui/sonner"
import { GoogleOAuthProvider } from '@react-oauth/google'
import ViewTrip from './view-trip/[tripID]/index.jsx'
import MyTrips from './My-trips/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/plan-trip',
    element: <Plantrip />,
  },
  {
    path: '/view-trip/:tripID',
    element: <ViewTrip />,
  },
  {
    path: '/My-trips',
    element: <MyTrips />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <Navbar />
      <Toaster />
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
)
