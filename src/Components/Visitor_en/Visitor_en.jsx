import { render } from "@testing-library/react";
import React, { useState, updateState} from "react";
import '../../App.css';
import Card_en from "./Card_en.jsx";
import Modal_en from "./Modal_en.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { newOrderLoc } from "../../redux/state";
import Switcher_en from "./switcher_en.jsx";


let Visitor_en = (props) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    let restoran = urlParams.get('restoran')
    const [modalimage, setModalImage] = useState('')
    const [showmodalimage, setShowModalImage] = useState(false)
    const [modalActive, setModalActive] = useState(false);

    const theme = urlParams.get('theme')

    if(restoran == null){
        restoran = "gyros";
    }
    const arrQ = [];
    const [category, setCategory] = useState("all");

    let Card_ens = props.state.map((el)=>{
    console.log(el)
         return <Card_en  plus ={props.plus} minus={props.minus} plus_loc ={props.plus_loc} minus_loc={props.minus_loc} newOrderLoc={newOrderLoc} newOrder={props.newOrder} orders={props.orders} state={el}/>;
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
    const [Modal_enActive, setModal_enActive] = useState(false);

// return(
//     <div>
//       {Card_ens}
//       <br /> 
//       <br /> 
//       <br />   
//       <div className="bottom-plash">
//       <button className="open__order" onClick={()=>setModal_enActive(true)}>Accept</button>
//       <Switcher_en/>
//       </div>

//      <Modal_en />
//     </div>
// );
return(
    <div>
      {Card_ens}
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
      <button className={"open__order confirm-"+theme}  onClick={()=>setModal_enActive(true)}>Confirmar</button>
    {/*}   :
       <button className={theme=="blue"? "open__order__blue":"open__order"} onClick={()=>venAqui()}>{props.orders.length}Podoidite ko mne</button>
         */}
      <Switcher_en/>
      </div>

     <Modal_en sendOrder={sendOrder} items_loc={props.orders_loc} items={props.orders} active ={Modal_enActive} setActive={setModal_enActive}/>
    </div>
);
}
export default Visitor_en;