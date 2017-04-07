/**
 * Created by Staal on 04/04/2017.
 */
import React, {Component} from 'react';
import bookstore from '../stores/Bookstore';

class AddEditBooks extends Component {
    constructor(props){
        super(props)

        var book = {
            title: "",
            info: "",
            moreInfo: ""
        }

        this.state = {
            book: book
        }
    }

    handleChange = (event) => {
        let id = event.target.id;
        let book = this.state.book;
        if(id === "title"){
            book.title=event.target.value;
        }
        if(id === "info"){
            book.info=event.target.value;
        }
        if(id === "moreInfo"){
            book.moreInfo=event.target.value;
        }
        this.setState({book: book})

    }

    saveBook = (event) => {
        event.preventDefault();
        let book = this.state.book;
        bookstore.addBook(book);
    }


    render(){
    return(
        <div className="text-center col-md-4 col-md-offset-4">
            <h1>Add/Edit Book</h1>
            < form action="#" >
                <div className="form-group">
                <label htmlFor="title">Title</label>
                    <input onChange={this.handleChange} type="Text" className="form-control" id="title" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="info">Info</label>
                    <input onChange={this.handleChange} type="info" className="form-control" id="info" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">More Info</label>
                    <input onChange={this.handleChange} type="Text" className="form-control" id="moreInfo" required/>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.saveBook}>Add/Edit</button>
            </form >
            <p>{JSON.stringify(this.state.book)}</p>
        </div>
    )}
}

export default AddEditBooks
