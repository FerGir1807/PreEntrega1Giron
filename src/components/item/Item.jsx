import React from 'react';

const Item = (props) => {

    return (

        <div className="card" style={{ width: "18rem" }} id={props.id} >
            <img className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">{props.descripcion}</p>
            </div>
        </div>

    )
}
export default Item