import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import {hashHistory, Router, Route, IndexRoute} from 'react-router'
import App from './pages/App';
import Home from './pages/Home';
import Documentation from "./pages/Documentation";
import Products from "./pages/Products";
import Company from "./pages/Company";
import AddEditBooks from "./pages/AddEditBooks";
import AddEditUsers from "./pages/AddEditUsers";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import Details from "./pages/Products"
import Bookstore from "./stores/Bookstore";
import auth from "./authorization/auth";


function requireAuth(nextState, replace) {
    if (!auth.loggedIn) {
        replace({
            pathname: '/login',
            state: {nextPathname: nextState.location.pathname}
        })
    }
}


var books =  new Bookstore().books;
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="documentation" component={Documentation}/>
            <Route path="products" component={Products}/>
            <Route path="bookstore" component={Products}
                   books={books}/>
            <Route path="products/details/:id" component={Details}
                   books={books}/>
            <Route path="company" component={Company}/>
            <Route path="addeditbooks" component={AddEditBooks}/>
            <Route path="addeditusers" component={AddEditUsers}/>
            <Route path="login" component={Login}/>
            <Route path="logout" component={Logout}/>
            <Route path="user" component={UserPage}/>
            <Route path="admin" component={AdminPage}/>
        </Route>
    </Router>
), document.getElementById('root'));

