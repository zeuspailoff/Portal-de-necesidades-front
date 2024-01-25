import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from '../src/components/ErrorBoundary.jsx'
import GenericError from './components/GenericError.jsx'
import { UserProvider } from './UserContext.jsx'
import { IntlProvider } from 'react-intl'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<GenericError />}>
      <IntlProvider locale="es">
        <UserProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserProvider>
      </IntlProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
