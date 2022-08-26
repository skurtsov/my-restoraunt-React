import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { newOrder, addOrder, plusOrder, minusOrder, newOrderLoc, plusOrder_loc, minusOrder_loc } from './redux/state';
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
export let renderTree=(state)=>{

root.render(
  <React.StrictMode>
    <App orders={state.orders} orders_loc={state.orders_loc} addOrder={addOrder} plus={plusOrder} minus={minusOrder} plus_loc={plusOrder_loc} minus_loc={minusOrder_loc} server={state.ordersServer} newOrderLoc={newOrderLoc} newOrder={newOrder} state={state.card_state} />
  </React.StrictMode>
);
//console.log(state.orders);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
