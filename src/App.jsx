/* Import statements*/
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import VideoCall from './Pages/VideoCall/VideoCall';
import Quiz from './Pages/Quiz/Quiz';
import CodeEditor from './Pages/CodeEditor/CodeEditor';
import Docs from './Pages/Docs/Docs';

/* Routing*/
const App = () => {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/video-call" element={<VideoCall />} />
        <Route path="/code-editor" element={<CodeEditor />} />
      </Routes>
    </Router>
    </>
  )
}

export default App