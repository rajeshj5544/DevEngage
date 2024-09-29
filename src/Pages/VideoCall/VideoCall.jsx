/*Zego-Cloud VIdeocall SDK*/

import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function randomID(len) {
    let result = '';
    if (result) return result;
    var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
        maxPos = chars.length,
        i;
    len = len || 5;
    for (i = 0; i < len; i++) {
        result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
}

export function getUrlParams(
    url = window.location.href
) {
    let urlStr = url.split('?')[1];
    return new URLSearchParams(urlStr);
}

export default function VideoCall() {
    const navigate=useNavigate();

    const roomID = getUrlParams().get('roomID') || randomID(5);
    let myMeeting = async (element) => {
        // generate Kit Token
        const appID = 1583391422;
        const serverSecret = "6b28e74e20ceaeb078a27025b05818d9";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(5), randomID(5));


        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy link',
                    url:
                        window.location.protocol + '//' +
                        window.location.host + window.location.pathname +
                        '?roomID=' +
                        roomID,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
        });


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
        <>
            <Navbar data="Video-Call"/>
            <div
                className="myCallContainer"
                ref={myMeeting}
                style={{ width: '100vw', height: '80vh' }}
            >
                <ToastContainer />
            </div>
        </>
    );
}