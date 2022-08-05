import React from 'react';
import '../../App.css';

let Modal = (props)=>{
    //let qq = props.items;
    //debugger
    let it = props.items.map((el,index)=>{
        return <li key={index}> {el.kol}x {el.order}</li>
    })
    return(
        <div className={props.active ? "modal active" : "modal"} onClick={()=>props.setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <ul className='zakaz__modal'>
            {it}
            </ul>
            <div className="subm-button" onClick={props.sendOrder}>Заказать</div>

            </div>
        </div>
    )
}
export default Modal;