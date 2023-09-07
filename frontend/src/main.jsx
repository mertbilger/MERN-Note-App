import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NotContextProvider from './contexts/NotContext.jsx'
import AuthContextProvider from './contexts/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthContextProvider>
      <NotContextProvider>
        <App />
      </NotContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
