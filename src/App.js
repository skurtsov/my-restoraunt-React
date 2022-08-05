import logo from './logo.svg';
import './App.css';
import Visitor from './Components/Visitor/Visitor';
import Waiter from './Components/Waiter/Waiter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Visitor plus ={props.plus} minus={props.minus} newOrder={props.newOrder} orders={props.orders} state={props.state}/>}></Route>
        <Route path="/visitor" element={<Visitor newOrder={props.newOrder} orders={props.orders} state={props.state}/>}></Route>
        <Route path="/waiter" element={<Waiter server={props.server} addOrder={props.addOrder}/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
