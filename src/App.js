import logo from './logo.svg';
import './App.css';
import Visitor from './Components/Visitor/Visitor';
import Waiter from './Components/Waiter/Waiter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Visitor_en from './Components/Visitor_en/Visitor_en';
import Visitor_cat from './Components/Visitor_cat/Visitor_cat';


function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Visitor plus ={props.plus} minus={props.minus} newOrder={props.newOrder} orders={props.orders} state={props.state}/>}></Route>
      <Route path="/en" element={<Visitor_en plus ={props.plus} minus={props.minus} plus_loc ={props.plus_loc} minus_loc={props.minus_loc} newOrderLoc={props.newOrderLoc} newOrder={props.newOrder} orders_loc={props.orders_loc} orders={props.orders} state={props.state}/>}></Route>
      <Route path="/cat" element={<Visitor_cat plus ={props.plus} minus={props.minus} plus_loc ={props.plus_loc} minus_loc={props.minus_loc} newOrderLoc={props.newOrderLoc} newOrder={props.newOrder} orders_loc={props.orders_loc} orders={props.orders} state={props.state}/>}></Route>

        <Route path="/waiter" element={<Waiter server={props.server} addOrder={props.addOrder}/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
