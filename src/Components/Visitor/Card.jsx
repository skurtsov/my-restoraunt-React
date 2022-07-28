let Card = (props)=>{
   console.log(props.state);
    return(
        <div className="card" >
        <div className="img-prod">
            <img src={props.state.image} alt="" />
        </div>
        <div className="title">
            <h3>{props.state.name}</h3>
        </div>
        <div className="desc">
            <p>{props.state.desc}</p>
        </div>
        <div className="price">
            <p>{props.state.desc}</p>
        </div>
        <div className="subm-button">Заказать</div>

    </div>
    );
}
export default Card;