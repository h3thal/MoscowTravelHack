import React, {JSX} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header.tsx";
// import {BreadCrumb} from "primereact/breadcrumb";
import TourById from "./pages/TourById.tsx";
import Footer from "./components/Footer.tsx";
import TourCatalogue from "./pages/TourCatalogue.tsx";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";
import RentCatalogue from "./pages/RentCatalogue.tsx";
import Reservation from "./pages/Reservation.tsx";

const RouterApp = (): JSX.Element => {

  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter basename={'/'}>
          <Header/>
          {/*<BreadCrumb model={items}/>*/}
          <Routes>
            <Route path={'/'} element={<TourCatalogue/>}/>
            <Route path={'/tour'} element={<TourById/>}/>
            <Route path={'/tour/:id'} element={<TourById/>}/>
            <Route path={'/rent/'} element={<RentCatalogue/>}/>
            <Route path={'/reservation'} element={<Reservation/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
}

export default RouterApp;
