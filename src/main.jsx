import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from "react-router-dom";
import App from './App.jsx'
import './nullstyle.css'
import './globalstyle.css'

import { register } from 'swiper/element/bundle';
register();

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <App />
  </BrowserRouter>
)
