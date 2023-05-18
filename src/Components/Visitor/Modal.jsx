import React, { useState } from 'react';
import '../../App.css';

let Modal = (props)=>{
    //let qq = props.items;
    //debugger
    const[check,setCheck]=useState(false);
    let it = props.items.map((el,index)=>{
        return <li key={index}> {el.kol}x {el.order}</li>
    })
    let sendAll=()=>{
        props.sendOrder();
        setCheck(true)
    }
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const theme = urlParams.get('theme')
    return(
        <div className={props.active ? "modal active" : "modal"} onClick={()=>props.setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
            <div className="podtw"><h3>Cuando presiona el botón "Confirmar", el pedido se transfiere automáticamente al camarero</h3></div>
                <ul className='zakaz__modal'>
            {!check ? it: null}
            {check && props.id<100 ? <div class="check-circle">
            <div class="check-circle__mark"></div>
            </div>: check && props.id>100 ? 
            <h3 className={"numer color-"+theme}>{props.id}</h3>
            :null}
            </ul>
            {!check ? <div className={"subm-button conf-button subm-"+theme} onClick={()=>{ props.sendOrder(); setCheck(true)}}>Confirmar</div>:check &&props.id<100?<h3 class="esperar">Todo bien. Por favor, espera para camarero</h3>:<h3 class="esperar">Todo bien. Tu Numero es {props.id}</h3>}

            </div>
        </div>
    )
}
export default Modal;