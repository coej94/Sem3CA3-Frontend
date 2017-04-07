import React from 'react';
import {Link} from "react-router";
import bookstore from "../stores/Bookstore";
class Products extends React.Component {

    render() {
        return (
            <div>
                <h2>Our Products</h2>
                <h4>All our great books </h4>
                <ul>
                    {bookstore.books.map((book, index) => {
                        return(  <li key={index}>{book.title}
                                <Link to={`details/${index}`}> (details)</Link>
                            </li>
                        )})}

                </ul>
            </div>)
    }
}
export default Products;


