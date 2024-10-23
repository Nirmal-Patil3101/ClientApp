import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {MainStore} from './ReduxWork/MainStore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={MainStore}>
    <App />
    </Provider>
  </StrictMode>,
)
