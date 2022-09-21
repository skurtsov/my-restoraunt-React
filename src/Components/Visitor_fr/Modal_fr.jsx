import React, { useState } from 'react';
import '../../App.css';

let Modal_fr = (props)=>{
    //let qq = props.items;
    //debugger
    const[check,setCheck]=useState(false);
    let it = props.items_loc.map((el,index)=>{
        return <li key={index}> {el.kol}x {el.order}</li>
    })
    let sendAll=()=>{
        props.sendOrder();
        setCheck(true)
    }
    return(
        <div className={props.active ? "modal active" : "modal"} onClick={()=>props.setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
            <div className="podtw"><h3>Les tojur que flok kik</h3></div>
                <ul className='zakaz__modal'>
            {!check ? it: null}
            {check ? <div class="check-circle">
            <div class="check-circle__mark"></div>
            </div>: null}
            </ul>
            {!check ? <div className="subm-button conf-button" onClick={()=>{ props.sendOrder(); setCheck(true)}}>Accept all</div>:<h3 class="esperar">Buen espyl para lepetit</h3>}

            </div>
        </div>
    )
}
export default Modal_fr;