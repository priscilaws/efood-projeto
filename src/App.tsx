import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Cardapio from './pages/Cardapio'
import { GlobalCss } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import Checkout from './pages/Address'
import Payment from './pages/Payment'
import Confirmation from './pages/Confirmation'
import Cart from './components/Cart'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: 'restaurante/:id/cardapio',
    element: <Cardapio />,
    children: [
      {
        path: 'carrinho',
        element: <Cart />,
      },
      {
        path: 'endereco',
        element: <Checkout />,
      },

      {
        path: 'pagamento',
        element: <Payment />,
      },

      {
        path: 'confirmacao',
        element: <Confirmation />,
      },
    ],
  },
])

function App() {
  return (
    <>
      <GlobalCss />

      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>

      <Footer />
    </>
  )
}

export default App
