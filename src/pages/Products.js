import React from 'react';
import Bookstore from "../stores/Bookstore";



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
                {/*<Link to="/products">Products</Link>*/}
            </div>
        );
    }


    get details() {
        return this._details
    }
}

    const Product = (props) => (
        <div>
            <h2>Our Products</h2>
            <h4>All our great books </h4>
            <ul>
                {props.route.books.map((book, index) => <li key={index}>
                    {book.title} </li>)}
            </ul>
        </div>
    )
export default Product;


