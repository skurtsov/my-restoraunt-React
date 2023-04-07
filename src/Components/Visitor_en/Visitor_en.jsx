import { render } from "@testing-library/react";
import React, { useState, updateState} from "react";
import '../../App.css';
import Card_en from "./Card_en";
import Modal_en from "./Modal_en";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { newOrderLoc } from "../../redux/state";
import Switcher_en from "./switcher_en";


let Visitor_en = (props) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const [modalimage, setModalImage] = useState('')
    const [showmodalimage, setShowModalImage] = useState(false)
    let id = urlParams.get('id')
    const theme = urlParams.get('theme')
    let restoran = urlParams.get('restoran')
    console.log('default id'+id)
    if(restoran == null){
        restoran = "greek";
    }
   if(id == null){
    id = Math.floor(Math.random() * (999 - 100) + 100)
    console.log('generated id'+id)
   }
    const arrQ = [];
    const [category, setCategory] = useState("all");

    let cards = props.state.map((el)=>{
    
         return <Card_en  plus ={props.plus} minus={props.minus} newOrder={props.newOrder} orders={props.orders} setShowModalImage={setShowModalImage} setModalImage={setModalImage} state={el}/>;
    })


     let ords = props.orders.map((elq,index)=>{
         return <li key={index}>{elq?.kol +'x '+ elq?.order}</li>
         debugger
     })
    let sendOrder = ()=>{
        var xhr = new XMLHttpRequest();
        //var body = "id="+Math.floor(Math.random() * 999999)+"&stolik="+id+"&restoran="+restoran+"&zakaz="+props.orders.map(a => a.kol+'x ' + a.order);    
        console.log(props.orders);
        xhr.open("GET", 'https://reactive-cafe.com/api/norder/?restoran='+restoran+"&stolik="+id+"&zakaz="+props.orders.map(a => a.kol+'x ' + a.order), false);
        xhr.send(null);
        console.log(xhr)
             //   alert("yes");
    }
    let venAqui = ()=>{
        sendOrder();
        alert('sha podoidut');
    }
    const [modalActive, setModalActive] = useState(false);
return(
    <div>
      {cards}
      <br /> 
      <br /> 
      <br />   
      {showmodalimage?
      <div className="imagemodal" onClick={()=>setShowModalImage(false)}>
            <div className="modalcontent">
            <img src={modalimage} alt="" />
           
            </div>
      </div>
   :null
      }
      <div className="bottom-plash">
        {/* {props.orders.length >1? */}
      <button className={theme=="blue"? "open__order__blue":"open__order"} onClick={()=>setModalActive(true)}>Confirmar</button>
    {/*}   :
       <button className={theme=="blue"? "open__order__blue":"open__order"} onClick={()=>venAqui()}>{props.orders.length}Podoidite ko mne</button>
         */}
      <Switcher_en/>
      </div>

     <Modal_en sendOrder={sendOrder} id={id} items={props.orders} active ={modalActive} setActive={setModalActive}/>
    </div>
);
}
export default Visitor_en;