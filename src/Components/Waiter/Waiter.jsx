import { faL } from "@fortawesome/free-solid-svg-icons";
import e from "cors";
import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";
import Order from "./Order";


let Waiter = (props) => {
  let[ignore, setIgnore]= useState(false);
   let get_orders=()=>{     
    let resp='';
    let xhr = new XMLHttpRequest();
   
     xhr.open("POST","https://makemesites.com/restoran/waiter.php",false);
     xhr.onreadystatechange = function() {
       if (xhr.readyState==4 && xhr.status==200)
         //console.log(xhr.responseText);
         resp = xhr.responseText;
     };
     xhr.send(null);
     props.addOrder(resp);
     
     //console.log("server orders:"+ props.server[0].zakaz);

}
let clean_orders=()=>{     
  if (window.confirm("¿Está seguro?")) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST","https://makemesites.com/restoran/clean.php",false);
  xhr.send(null);
} 
else{
  console.log('cleaned')
 return false;
}
}

//get_orders();
let ordersToShow = props.server.map((el)=>{
  return <Order setIgnore={setIgnore} stolik={el.stolik} zakaz={el.zakaz} id={el.id}/>
})
useEffect(() => {

  setInterval(() => {
    get_orders();
  //console.log("ped:"+pedidos);
  }, 2000);

  
}, []);

useEffect(() => {
 if(props.server.length>0 && ignore != true){
  alert("Nuevo pedido");
  setIgnore(false)
 }
}, [props.server.length]);


return(
    <div>

        <h1 className="title__pedidos">Pedidos totales: {props.server.length}</h1>
        
        {ordersToShow}
        <div className="bottom-plash">
        <button className="open__order" onClick={()=>clean_orders()}>Limpiar todo</button>
      </div>
        
    </div>
);
}
export default Waiter;