import { createHashRouter, RouterProvider } from "react-router-dom"
import Layout from "./page/layout/Layout"
import { Provider } from "react-redux"
import { store } from "./lib/redux/store"
import NotFound from './components/notFound/NotFound';
const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
])
export default function App() {
  return <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
}
