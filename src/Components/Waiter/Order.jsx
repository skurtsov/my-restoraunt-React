import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";


let Order = (props) => {
     let ord = props.zakaz.split(',');
     let arr =[];
     let newOrder='My new order';
     const [hidden, setHidden] = useState(true);
     const  nameRef = React.useRef(null);
    let goRedact=()=>{
            let xhr = new XMLHttpRequest();
            newOrder = nameRef.current.value
            let body = "stolik="+props.stolik+"&zakaz="+'0,'+newOrder;
            console.log(props.orders);
            xhr.open("POST", 'http://localhost/restoran/index.php', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
            xhr.send(body);
            console.log(xhr)
            
                 //   alert("yes");
     }
   
     let deleteById=(prod_id)=>{
        var xhr = new XMLHttpRequest();

        var body = "id="+prod_id;
        
        console.log(props.orders);
        xhr.open("POST", 'http://localhost/restoran/delete_id.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.send(body);
        console.log(xhr)
              alert("deleted"+prod_id);
     }
     console.log(typeof(ord))
     Object.keys(ord).forEach(function(key) {
         arr.push(ord[key])
       })
       let arr_show = arr.map((el,index)=>{
        return <li key={index}>{el}</li>
       })
       
return(
    <div>
          <div class="card">
            <div class="stolik">
                <p>Numer stolika {props.stolik} id {props.id}</p>
            </div>
            <div class="zam">
                <ul className="zakaz__waiter">
            {arr_show}
            </ul>
            </div>
            <div class="accept">
            {hidden ? <FontAwesomeIcon onClick={()=>{setHidden(false)}} icon={faCheck} /> :
            <FontAwesomeIcon onClick={()=>deleteById(props.id)}icon={faTrash} />}

            
                <i class="fa-solid fa-pen-to-square"></i>
            </div>
            <div className="redactForm">
            <textarea ref={nameRef}  cols="30" rows="5"></textarea>
            <div onClick={goRedact} className="goredact">Редактировать</div>
            </div>
        </div>
    </div>
);
}
export default Order;