import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import App from './App'
import ViewAddedProducts from './pages/VIewAddedProducts'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/Home',
        element: <Home />,
      },
      {
        path: '/ProductDetails/:product_id',
        element: <ProductDetail />,
      },
      {
        path: '/Summary',
        element: <ViewAddedProducts />,
      },
    ],
  },
])

export default router
