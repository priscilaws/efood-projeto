import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Cardapio from './pages/Menu/Cardapio'
import { GlobalCss } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/cardapio',
    element: <Cardapio />,
  },
])

function App() {
  return (
    <>
      <GlobalCss />

      <RouterProvider router={router} />

      <Footer />
    </>
  )
}

export default App
