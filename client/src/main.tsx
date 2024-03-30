import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={'/tour'}>
      <Header/>
      <Routes>
        <Route path={'/'} element={<App/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
