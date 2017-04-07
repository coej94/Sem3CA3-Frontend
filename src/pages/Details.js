/**
 * Created by Staal on 05/04/2017.
 */


let bookstore = new Bookstore();

//Only for debugging
//window.userStore = userStore;
export default bookstore;

import React from "react";

class Details extends React.Component {
    render() {
        let id = this.props.params.id;
        let book = this.props.route.books.filter((book, index) => {
            return index === Number(id);
        })[0];
        return (
            <div>
                <h3 style={{color: "steelblue"}}>Detailed info for the title: {book.title}</h3>
                <h4> {book.info}</h4>
                <h4>{book.moreInfo}</h4>
                <br />

            </div>
        );
    }


    get details() {
        return this._details
    }
}

export default Details;