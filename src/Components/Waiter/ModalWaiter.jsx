import React from 'react';
import '../../App.css';

let ModalWaiter = (props)=>{
    //let qq = props.items;
    //debugger
    const  nameRef = React.useRef(null);
    let newOrder='My new order';
    let goRedact=()=>{
        let xhr = new XMLHttpRequest();
        newOrder = 'undefined, ' + nameRef.current.value
        let body = "id="+props.id+"&order="+newOrder;
        xhr.open("POST", 'https://makemesites.com/restoran/redact.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.send(body);
        console.log(xhr);
        props.setActive(false);
             //   alert("yes");
 }
    return(
        <div className={props.active ? "modal active" : "modal"} onClick={()=>props.setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h2>Editar</h2>
            <textarea ref={nameRef}  cols="30" rows="5"></textarea>
            <div onClick={()=>goRedact()} className="subm-button conf-button">Editar</div>


            </div>
        </div>
    )
}
export default ModalWaiter;