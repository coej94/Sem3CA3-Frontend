import React, {Component} from 'react'
import {observer} from "mobx-react";
import { Link } from 'react-router'
import bookstore from "../stores/Bookstore";


@observer
class Products extends Component {

    componentWillMount() {
        /*
         This will fetch data each time you navigate to this route
         Move to constructor, if only required once, or add "logic" to determine when data should be "refetched"
         */
        bookstore.getData();
    }


    render() {

       var thelist = bookstore.books.map(function (book) {
            return (<li key={book.id}> {book.title} <Link to={`products/details/${book.id}`}>(details)</Link></li>)
        })


        return (
            <div>
                <p></p>
                <h2>Our Products</h2>
                <h4>All our great books </h4>

                <ul>

                    {thelist}


                </ul>
            </div>)
    }
}

export default Products;


