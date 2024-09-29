import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import HomeCard from '../../Components/HomeCard/HomeCard';
import "./Home.css"
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/*Home page*/
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const x = localStorage.getItem("User");
    if (!x) {

      navigate("/login");
      setTimeout(() => {
        toast.warning("Login Required");
      }, 1000);
    }
  }, []);

  return (
    <div className="home-page">
      <ToastContainer />
      <div className="header">
        <Navbar data="Welcome" />
      </div>
      <div className="main-content">
        <div id="container"><h1 className="style-2">Welcome To DevEngage</h1></div>
        <Link className='Link' to="/video-call">
          <HomeCard title="Video Call" data="Connect with others through video calls and meetings." image='https://static.thenounproject.com/png/3455904-200.png' />
        </Link>
        <Link className='Link' to="/quiz">
          <HomeCard title="Quiz" data="Test your knowledge with our interactive quizzes." image='https://static.thenounproject.com/png/2690288-200.png' />
        </Link>
        <Link className='Link' to="/docs">
          <HomeCard title="Docs" data="Explore our documentation for in-depth information." image='https://static.thenounproject.com/png/5086-200.png' />
        </Link>
        <Link className='Link' to="/code-editor">
          <HomeCard title="Code Editor" data="Explore our Code pen compiler for practice." image='https://www.svgrepo.com/show/311947/code-editor.svg' />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
