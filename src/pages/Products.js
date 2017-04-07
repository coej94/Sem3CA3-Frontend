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
            return (<li> {books.title} </li>)
        })

        return (
            <div>
                <p></p>
                <h2>Our Products</h2>
                <h4>All our great books </h4>
                <h1></h1>
                <ul>
<<<<<<< HEAD
                    {bookstore.books.map((book, index) => {
                        return(  <li key={index}>{book.title}
                                <Link to={`details/${index}`}> (details)</Link>
                            </li>
                        )})}
=======

                    {thelist}
>>>>>>> 6b6610cdcaec9339b166c6426e501fccb6f3c274

                </ul>
            </div>)
    }
}

export default Products;


