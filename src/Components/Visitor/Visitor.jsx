import { render } from "@testing-library/react";
import React, { useState, updateState} from "react";
import '../../App.css';
import Card from "./Card";
import Modal from "./Modal";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


let Visitor = (props) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    const arrQ = [];
    const [category, setCategory] = useState("all");

    let cards = props.state.map((el)=>{
    
         return <Card  plus ={props.plus} minus={props.minus} newOrder={props.newOrder} orders={props.orders} state={el}/>;
    })


     let ords = props.orders.map((elq,index)=>{
         return <li key={index}>{elq?.kol +'x '+ elq?.order}</li>
         debugger
     })
    let sendOrder = ()=>{
        var xhr = new XMLHttpRequest();

        var body = "id="+Math.floor(Math.random() * 999999)+"&stolik="+id+"&zakaz="+props.orders.map(a => a.kol+'x ' + a.order);
        
        console.log(props.orders);
        xhr.open("POST", 'http://makemesites.com/restoran/index.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.send(body);
        console.log(xhr)
             //   alert("yes");
    }
    const [modalActive, setModalActive] = useState(false);

return(
    <div>
      {cards}
      <br /> 
      <br /> 
      <br />   
      <div className="bottom-plash">
      <button className="open__order" onClick={()=>setModalActive(true)}>Confirmar</button>
      </div>

     <Modal sendOrder={sendOrder} items={props.orders} active ={modalActive} setActive={setModalActive}/>
    </div>
);
}
export default Visitor;