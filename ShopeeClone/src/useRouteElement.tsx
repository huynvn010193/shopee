import React from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import RegisterLayout from './layout/RegisterLayout'
import Login from './pages/Login'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Profile from './pages/Profile'

const isAuthenticated = true

function ProtectedRoute() {
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' /> // Nếu đã login rồi thì tiếp tục cho thao tác. Còn không thì navigate về trang login
}

function RejectedRoute() {
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: '',
      index: true, // Sét index true để cho nhận diện là chính
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: 'profile',
          element: (
            <MainLayout>
              <Profile />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      // Muốn vào con phải vào element cha
      children: [
        {
          path: 'login',
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: 'register',
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    }
  ])
  return routeElement
}
