import React, {Component} from 'react'
import {observer} from "mobx-react";
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

       var thelist = bookstore.books.map(function (books) {
            (<li> {books.title} </li>)
        })

        return (
            <div>
                <h2>Our Products</h2>
                <h4>All our great books </h4>
                <h1></h1>
                <ul>

                    {thelist}

                </ul>
            </div>)
    }
}

export default Products;


