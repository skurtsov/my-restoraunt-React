import React from 'react';
import '../../App.css';

let ModalWaiter = (props)=>{
    //let qq = props.items;
    //debugger
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let restoran = urlParams.get('restoran')
    let zak= props.zak;
    let arr_to = zak.map((el)=> {
        if(el.props.children == "undefinedx undefined" || el.props.children =="undefined"){
            return ""
        }
        else{
            return el.props.children
        }
    });
    console.log(arr_to)
    if(restoran == null){
        restoran = "gyros";
    }
    const  nameRef = React.useRef(null);
    let newOrder='My new order';
    let goRedact=()=>{
        let xhr = new XMLHttpRequest();
        newOrder = 'undefined, ' + nameRef.current.value
        let body = "id="+props.id+"&restoran="+restoran+"&order="+newOrder;
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
            <textarea ref={nameRef} cols="30" rows="5">{arr_to.toString().substr(1)}</textarea>
            <div onClick={()=>goRedact()} className="subm-button conf-button">Editar</div>


            </div>
        </div>
    )
}
export default ModalWaiter;