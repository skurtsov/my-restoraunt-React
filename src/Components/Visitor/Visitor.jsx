import React from "react";
import '../../App.css';
import Card from "./Card";


let Visitor = (props) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    const arrQ = [];
    let cards = props.state.map((el)=>{
        return <Card newOrder={props.newOrder} orders={props.orders} state={el}/>;
    })
    let ords = props.orders.map((elq)=>{
        return <li key={elq}>{elq}</li>
    })
    let sendOrder = ()=>{
        var xhr = new XMLHttpRequest();

        var body = "stolik="+id+"&zakaz="+props.orders.slice(1, props.orders.length);
        console.log(props.orders);
        xhr.open("POST", 'http://localhost/restoran/index.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.send(body);
        console.log(xhr)
                alert("yes");
    }
return(
    <div>
      {cards}
      {ords}
      <br />
      <div className="button">Цена -  {props.orders[0]}</div>

      <div className="button-zak" onClick={sendOrder}>Заказать все -  {props.orders.length}</div>
     
    </div>
);
}
export default Visitor;