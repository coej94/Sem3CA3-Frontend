/**
 * Created by Staal on 05/04/2017.
 */

import React from "react";
import bookstore from "../stores/Bookstore";
import {Link} from "react-router";

class Details extends React.Component {
    //
    // constructor() {
    //     super();
    //     this.state = {
    //         book: {
    //             title: "",
    //             info: "",
    //             moreInfo: "",
    //         }
    //     };
    // }

    render() {
        let id = this.props.params.id;
        let book = bookstore.books.filter((book) => {
            if (Number(book.id) === Number(id)) {
                return book;
            }
        })[0];

        if (book == null) {
            book = {title: "", info: "", moreInfo: ""}
        }
        return (
            <div>
                <h3 style={{color: "steelblue"}}>Detailed info for the title: {book.title}</h3>
                <h4> {book.info}</h4>
                <h4>{book.moreInfo}</h4>
                <br/>
                <Link to="/products">Back to Products</Link>
            </div>
        );
    }

}

export default Details;