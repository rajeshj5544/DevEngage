import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
/*Navbar*/
const Navbar = ({ data }) => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    /*Logout Logic*/
    const LogOut = () => {
        localStorage.removeItem("User");
        toast.success("Logout Successful");
        setTimeout(() => {
            navigate('/login');
        }, 1000);
    };
    useEffect(() => {
        setName(localStorage.getItem("User"));
    }, []);
    return (
        <div className="navbar-style">
            <ToastContainer />
            <nav className="navbar">
                <Link className="Link-navbar" to="/">
                    <div className="navbar-left">
                        <div className="logo">
                            <img src="https://imgs.search.brave.com/vfbLrl4GbZ8jCVcYNyFiaeYD-O6XMye_b2u0BruIRj4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni83MTc5LzcxNzkx/NzQucG5n" alt="Logo" />
                        </div>
                        <div className="name">
                            <span>DevEngage</span>
                        </div>
                    </div>
                </Link>
                <div className="navbar-middle">
                    <h1>{data === "Welcome" ? `Welcome ${name}` : data}</h1>
                </div>
                <div className="navbar-right">
                    <button onClick={LogOut} className="logout-button">Logout</button>
                </div>
            </nav>
        </div>
    );
};
Navbar.PropTypes = {
    data: PropTypes.string.isRequired
}



export default Navbar;
