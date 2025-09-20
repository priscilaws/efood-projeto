import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Cardapio from './pages/Menu/Cardapio'
import { GlobalCss } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import Cart from './components/Cart'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: 'restaurante/:id/cardapio',
    element: <Cardapio />,
  },
])

function App() {
  return (
    <>
      <GlobalCss />

      <Provider store={store}>
        <RouterProvider router={router} />
        <Cart />
      </Provider>

      <Footer />
    </>
  )
}

export default App
