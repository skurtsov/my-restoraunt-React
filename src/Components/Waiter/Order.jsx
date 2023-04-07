import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import ModalWaiter from "./ModalWaiter";


let Order = (props) => {
     let ord = props.zakaz.split(',');
     let arr =[];
     const queryString = window.location.search;
     const urlParams = new URLSearchParams(queryString);
     let restoran = urlParams.get('restoran')
     if(restoran == null){
        restoran = "gyros";
    }
     const [hidden, setHidden] = useState(true);
    
     const [modalActive, setModalActive] = useState(false);
   
     let deleteById=(prod_id)=>{
        var xhr = new XMLHttpRequest();
        xhr.open("GET", 'https://reactive-cafe.com/api/deleteid/?id='+prod_id+'&restoran='+restoran, true);
//        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send(null)


        props.setIgnore(true)
     }
     //console.log(typeof(ord))
     Object.keys(ord).forEach(function(key) {
         arr.push(ord[key])
       })
       let arr_show = arr.map((el,index)=>{
        return <li key={index}>{el}</li>
       })
       
return(
    <div>
          <div class="card__waiter">
            <div class="stolik">
                {props.stolik <100 ? <p>Numero de mesa: {props.stolik}</p>:<p>Numero de orden: {props.stolik}</p>}
            </div>
            <div class="zam">
                <ul className="zakaz__waiter">
            {arr_show.length>1?arr_show:<h3>podoidite k stoliku</h3>}
            </ul>
            </div>
            <div class="accept">
            {hidden ? <FontAwesomeIcon onClick={()=>{setHidden(false)}} icon={faCheck} /> :
            <FontAwesomeIcon onClick={()=>deleteById(props.id)}icon={faTrash} />}
            <FontAwesomeIcon onClick={()=>setModalActive(true)} icon={faPen} />
            <ModalWaiter zak={arr_show} id={props.id} active ={modalActive} setActive={setModalActive}/>
            
                <i class="fa-solid fa-pen-to-square"></i>
            </div>
            <div className="redactForm">
            </div>
        </div>
    </div>
);
}
export default Order;