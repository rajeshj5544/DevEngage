import { useState,useEffect } from 'react';
import "../Signup/Signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/*Signup Page*/
const Signup = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    /*Show or Hide password */
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    /* Signup Logic*/
    const SignupNow = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                localStorage.setItem("User", username);
                toast.success("Account Created Successfully");
                setTimeout(() => {
                    navigate("/login");
                }, 3000);
                console.log(userCredential);

            })
            .catch((error) => {
                toast.error("Error creating account");
                console.log(error);
            });
    };
    useEffect(() => {
        const x = localStorage.getItem("User");
        if (x) {
            navigate("/");
        }
    }, []);

    return (
        <div className="completePage">
            <ToastContainer />
            <div className="container">
                <div className="heading">Create Account</div>
                <form onSubmit={SignupNow} className="form">
                    <input required
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        className="input" type="text" name="username" id="username" placeholder="Username" />
                    <input required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="input" type="email" name="email" id="email" placeholder="E-mail" />
                    <div style={{ position: 'relative' }}>
                        <input
                            required
                            className="input"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            className='show-hide-password'
                            type="button"
                            onClick={togglePasswordVisibility}
                            style={{ position: 'absolute', right: '10px', top: '30%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    <span className="forgot-password">
                        <Link to="/login">Already Have an Account ?</Link>
                    </span>
                    <input className="login-button" type="submit" value="Sign In" />
                </form>
                <span className="agreement">
                    <a href="#">Learn user licence agreement</a>
                </span>
            </div>
        </div>
    );
};

export default Signup;
