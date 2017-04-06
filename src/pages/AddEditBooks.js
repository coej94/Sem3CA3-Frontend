/**
 * Created by Staal on 04/04/2017.
 */
import React from 'react';


var AddEditBooks = () => {
    return(
        <div className="text-center col-md-4     col-md-offset-4">
            <h1>Add/Edit Book</h1>
            < form action="#" >
                <div className="form-group">
                <label for="title">Title</label>
                    <input type="Text" className="form-control" id="title" required/>
                </div>
                <div className="form-group">
                    <label for="info">Info</label>
                    <input type="info" className="form-control" id="info" required/>
                </div>
                <div className="form-group">
                    <label for="title">More Info</label>
                    <input type="Text" className="form-control" id="title" required/>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Add/Edit</button>
            </form >
        </div>
    )
}

export default AddEditBooks
