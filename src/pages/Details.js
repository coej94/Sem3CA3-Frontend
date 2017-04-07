/**
 * Created by Staal on 05/04/2017.
 */

import React from "react";
import bookstore from "../stores/Bookstore";

class Details extends React.Component {

    constructor() {
        super();
        this.state = {
            book: {
                title: "",
                info: "",
                moreInfo: "",
            }
        };
    }

    render() {
        let id = this.props.book.params.id;
        let book = bookstore.books.filter((book, index) => {
            return index === Number(id);
        })[0];
        return (
            <div>
                <h3 style={{color: "steelblue"}}>Detailed info for the title: {book.title}</h3>
                <h4> {book.info}</h4>
                <h4>{book.moreInfo}</h4>
            </div>
        );
    }

}

export default Details;