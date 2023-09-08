import React from 'react';
import Item from './Item';

const ItemListContainer = (props) => {

    var itemLista = [
        {
            id: "1",
            nombre: "Playera Polo",
            descripcion: "Playera Polo para hombre"
        },
        {
            id: "2",
            nombre: "Playera Visitante",
            descripcion: "Playera de visitante para hombre"
        },
        {
            id: "3",
            nombre: "Playera Local",
            descripcion: "Playera de local para hombre"
        }
    ];

    return (
        <>
            <h4 style={{ textAlign: "center", color: "gray" }}>{props.greeting}</h4>
            {itemLista.map((item) => {
                return <Item id={item.id} nombre={item.nombre} descripcion={item.descripcion}></Item>
            })}

        </>

    )
}
export default ItemListContainer