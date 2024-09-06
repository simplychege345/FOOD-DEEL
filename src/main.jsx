import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { StoreProvider } from './Contex/StoreContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreProvider>
      <App />
      {/* <FoodList /> */}

    </StoreProvider>



  </BrowserRouter>

)
