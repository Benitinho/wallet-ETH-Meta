import axios from "axios"
import { useQuery } from "react-query"
import React, { Component } from 'react';

function getProductos() {
    return axios.get('http://localhost:8080/sql?sql=select * from products')
};


export function Products() {
    const { data: productos, isLoading, isError } = useQuery(['productos'], getProductos)

    if (isLoading) {
        return <div>Cargando...</div>
    };

    return (

        // table.table>thead>tr>th*3
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {productos.data.map(producto => (
                    <tr key={producto.product_id}>
                        <td>{producto.product_id}</td>
                        <td>{producto.product_name}</td>
                        <td>{producto.unit_price}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        // <div>
        //     {JSON.stringify(productos)}
        // </div>
    )
};

export default Products;