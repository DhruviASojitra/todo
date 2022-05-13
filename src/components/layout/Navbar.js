import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">

                <a class="navbar-brand" href="#">React User</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li>
                        <Link className="nav-link add" to="/users/add">AddData</Link>
                        </li>
                        <li>
                        <Link className="nav-link todo" to="/users/todo">TodoList</Link>
                        </li>
                        <li>
                        <Link className="nav-link cal" to="/users/calculator">Calculator</Link>
                        </li>
                    </ul>
                </div>
            
            </div>
        </nav>

    )
}
export default Navbar;