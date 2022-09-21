import { render } from "@testing-library/react";
import React, { useState, updateState} from "react";
import '../../App.css';
import Card_fr from "./Card_fr";
import Modal_fr from "./Modal_fr";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { newOrderLoc } from "../../redux/state";
import Switcher_fr from "./switcher_fr";


let Visitor_fr = (props) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    let restoran = urlParams.get('restoran')
    if(restoran == null){
        restoran = "gyros";
    }
    const arrQ = [];
    const [category, setCategory] = useState("all");

    let Card_frs = props.state.map((el)=>{
    
         return <Card_fr  plus ={props.plus} minus={props.minus} plus_loc ={props.plus_loc} minus_loc={props.minus_loc} newOrderLoc={newOrderLoc} newOrder={props.newOrder} orders={props.orders} state={el}/>;
    })


     let ords = props.orders.map((elq,index)=>{
         return <li key={index}>{elq?.kol +'x '+ elq?.order}</li>
         debugger
     })
    let sendOrder = ()=>{
        var xhr = new XMLHttpRequest();

        var body = "id="+Math.floor(Math.random() * 999999)+"&stolik="+id+"&restoran="+restoran+"&zakaz="+props.orders.map(a => a.kol+'x ' + a.order);
        
        console.log(props.orders);
        xhr.open("POST", 'https://makemesites.com/restoran/index.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.send(body);
        console.log(xhr)
             //   alert("yes");
    }
    const [Modal_frActive, setModal_frActive] = useState(false);

return(
    <div>
      {Card_frs}
      <br /> 
      <br /> 
      <br />   
      <div className="bottom-plash">
      <button className="open__order" onClick={()=>setModal_frActive(true)}>Le Accept</button>
      <Switcher_fr/>
      </div>

     <Modal_fr sendOrder={sendOrder} items_loc={props.orders_loc} items={props.orders} active ={Modal_frActive} setActive={setModal_frActive}/>
    </div>
);
}
export default Visitor_fr;