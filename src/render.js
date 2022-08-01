import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { newOrder, addOrder } from './redux/state';
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
export let renderTree=(state)=>{

root.render(
  <React.StrictMode>
    <App orders={state.orders} addOrder={addOrder} server={state.ordersServer} newOrder={newOrder} state={state.card_state} />
  </React.StrictMode>
);
//console.log(state.orders);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
