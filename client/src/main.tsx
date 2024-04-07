import ReactDOM from 'react-dom/client'

import RouterApp from "./RouterApp.tsx";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import './assets/scss/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterApp/>
)

