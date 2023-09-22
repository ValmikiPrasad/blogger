import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import "./index.css"
import { AuthContexProvider } from './contextApi/authContext.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <AuthContexProvider>

      <App />
   </AuthContexProvider>
    

   
  </React.StrictMode>,
)
