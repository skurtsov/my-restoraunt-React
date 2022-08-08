import React, { useState } from "react";
import '../../App.css';
import Card from "./Card";
import Modal from "./Modal";


let Visitor = (props) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    const arrQ = [];
    let cards = props.state.map((el)=>{
       
        return <Card  plus ={props.plus} minus={props.minus} newOrder={props.newOrder} orders={props.orders} state={el}/>;
    })
    let meat = ()=>{
    let cards = props.state.map((el)=>{
        if(el.cat =="meat"){
        return <Card  plus ={props.plus} minus={props.minus} newOrder={props.newOrder} orders={props.orders} state={el}/>;
        }
    })
    console.log(props.state)
    alert('meat');
}

     let ords = props.orders.map((elq,index)=>{
         return <li key={index}>{elq?.kol +'x '+ elq?.order}</li>
         debugger
     })
    let sendOrder = ()=>{
        var xhr = new XMLHttpRequest();

        var body = "id="+Math.floor(Math.random() * 999999)+"&stolik="+id+"&zakaz="+props.orders.map(a => a.kol+'x ' + a.order);
        
        console.log(props.orders);
        xhr.open("POST", 'http://localhost/restoran/index.php', true);
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
      <button className="open__order" onClick={()=>setModalActive(true)}>Confirmar</button>

     <Modal sendOrder={sendOrder} items={props.orders} active ={modalActive} setActive={setModalActive}/>
    </div>
);
}
export default Visitor;