import React from 'react';
import { Pagination } from "react-bootstrap";
import "./pagination.css"

const PaginationComponent = () => {
    return <div className="pagination-component">
        <Pagination className='pagination-container'>

            <Pagination.Prev />
            <Pagination.Item classname="pagination-item">{1}</Pagination.Item>
            <Pagination.Item classname="pagination-item">{2}</Pagination.Item>
            <Pagination.Item classname="pagination-item">{3}</Pagination.Item>
            <Pagination.Item classname="pagination-item">{4}</Pagination.Item>
            <Pagination.Item classname="pagination-item">{5}</Pagination.Item>
            <Pagination.Next />
           
        </Pagination>
    </div>
}

export default PaginationComponent;
