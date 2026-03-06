import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import AppRoutes from './config/appRoutes'
import { Provider } from "react-redux";
import { store } from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  </Provider>
)
