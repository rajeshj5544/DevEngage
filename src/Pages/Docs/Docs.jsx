import Navbar from "../../Components/Navbar/Navbar"
import DocsCard from "./Docscard/DocsCard"
import "./Docs.css"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
/*DOcs page */
const Docs = () => {
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
        <div>
            <ToastContainer />
            <Navbar data="Docs" />
            <div className="docs-container">
                <DocsCard title="React js" data="React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies." doc="../../assets/reactJSNotes.pdf" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTw3HApB4bsvabXW3L14cV-LhFo0L71QmEESJN3vW9Ow&s" />
                <DocsCard title="Mongo db" data="MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas" doc="../../assets/mongoDBNotes.pdf" image="https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg" />
                <DocsCard title="Express js" data="Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License." doc="../../assets/expressJSNotes.pdf" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLEzDptxwoQGMO0vTxDe8W4C0LjdcgLUUy5TnKIXrSxA&s" />
                <DocsCard title="Node js" data="Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engin" doc="../../assets/nodeJSNotes.pdf" image="https://logowik.com/content/uploads/images/nodejs.jpg" />
            </div>

        </div>
    )
}

export default Docs