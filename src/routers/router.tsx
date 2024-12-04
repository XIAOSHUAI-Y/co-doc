import React from 'react'
import { createBrowserRouter } from "react-router-dom"
import { Layout } from '../pages/Layout/layout'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />
  }
])
export default router