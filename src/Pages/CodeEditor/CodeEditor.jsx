import { useCallback, useState, useEffect } from 'react'
import CodeMirror from "@uiw/react-codemirror";
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import Result from './Result';
import './CodeEditor.css'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/*Code Editor Page */
function CodeEditor() {
    const navigate = useNavigate();
    //* create three usestate 
    const [html_edit, setHtml_Edit] = useState('<h1>Hello </h1>');
    const [css_edit, setCss_Edit] = useState('');
    const [js_edit, setJs_Edit] = useState('');

    //* Html onchange handler
    const onChangeHtml = useCallback((value) => {
        console.log(value);
        setHtml_Edit(value);
    }, [])

    //* Css onchange handler 
    const onChangeCss = useCallback((value) => {
        console.log(value);
        setCss_Edit(value)
    }, []);

    //* JavaScript onchange handler 
    const onChangeJavaScript = useCallback((value) => {
        console.log(value);
        setJs_Edit(value)
    }, []);

    //* Create Html Document
    const srcCode = `
  <html>
  <body>${html_edit}</body>
  <style>${css_edit}</style>
  <script>${js_edit}</script>
  </html>
  `
    const divStyle = {
        display: 'flex', /* Set the display to flex */
        justifyContent: 'space-around', /* Adjust as needed: space-around, space-between, center, etc. */
        alignItems: 'center', /* Adjust as needed: flex-start, flex-end, center, baseline, stretch */
        background: 'black',
        padding: '20px',
        // Additional div styles...
    };


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
            {/* Navbar  */}
            <Navbar data="Code Editor" />
            {/* main content  */}
            <div style={{ width: '100%' }}>
                {/* Editor  */}
                <div style={divStyle} >
                    {/* Html Editor */}
                    <div className="CodeMirror-scroll" style={{ width: '400px', marginLeft: '5px', marginRight: '5px' }}>
                        <h2 className="text-lg font-semibold mb-2 text-white">HTML</h2>
                        <CodeMirror
                            className="text-xl border-gray-700 border"
                            value={html_edit}
                            height="342px"
                            theme="dark"
                            extensions={[html(true)]}
                            onChange={onChangeHtml}
                        />
                    </div>

                    {/* Css Editor  */}
                    <div className="CodeMirror-scroll" style={{ width: '400px', marginLeft: '5px', marginRight: '5px' }}>
                        <h2 className="text-lg font-semibold mb-2 text-white">CSS</h2>
                        <CodeMirror
                            className="text-xl border-gray-700 border"
                            value={css_edit}
                            height="342px"
                            theme="dark"
                            extensions={[css(true)]}
                            onChange={onChangeCss}
                        />
                    </div>

                    {/* JavaScript Editor  */}
                    <div className="CodeMirror-scroll" style={{ width: '400px', marginLeft: '5px', marginRight: '5px' }}>
                        <h2 className="text-lg font-semibold mb-2 text-white">JavaScript</h2>
                        <CodeMirror
                            className="text-xl border-gray-700 border"
                            value={js_edit}
                            height="342px"
                            theme="dark"
                            extensions={[javascript(true)]}
                            onChange={onChangeJavaScript}
                        />
                    </div>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <Result srcCode={srcCode} />
                </div>

            </div>
        </div>
    )
}

export default CodeEditor;