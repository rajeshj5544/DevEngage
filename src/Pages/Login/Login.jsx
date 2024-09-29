import { useEffect, useState } from 'react';
import "../Login/Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/*Login page */
const Login = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
/* Show or hide password*/
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
/*Login Logic */
    const LoginNow = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                localStorage.setItem("User", username); // Store username, not email
                toast.success("Login Successful");
                setUsername(""); // Clear username input field
                setEmail(""); // Clear email input field
                setPassword(""); // Clear password input field
                setTimeout(() => {
                    navigate("/");
                }, 3000);
                console.log(userCredential);

            })
            .catch((error) => {
                toast.error("Login Failed");
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
                <div className="heading">Login</div>
                <form onSubmit={LoginNow} className="form">
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
                        <Link to="/sign-in">Dont have an Account?</Link> {/* Fixed typo here */}
                    </span>
                    <input className="login-button" type="submit" value="Login" />
                </form>
                <span className="agreement">
                    <a href="#">Learn user licence agreement</a>
                </span>
            </div>
        </div>
    );
};

export default Login;
