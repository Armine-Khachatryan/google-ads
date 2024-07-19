import React, { useEffect, useState } from "react";
import Google from "../../assets/icons/Google.svg";
// import Modal from "react-modal";
// Styles
import { Wrapper } from "./LetsStarted.styles";
import TitleTwoColor from "../TitleTwoColor/TitleTwoColor";
import { useNavigate } from "react-router-dom";
import { GOOGLE_FORM } from "../../router/router-path";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const CLIENT_ID = "203188833555-t51cvagdf8fjlihim8m831n4vv836apn.apps.googleusercontent.com";
const SCOPE = "https://www.googleapis.com/auth/adwords";


const LetsStarted = () => {
  return (
    <div>LetsStarted</div>
  )
}

// const LetsStarted = () => {
//   const navigate = useNavigate();
//   const [user,setUser] = useState({})
//   const handleConnect = () => {
//     navigate(GOOGLE_FORM);
//   };

//   const handleCallBackRes = (res) => {
//     console.log("JWT ID TOKEN", res.credential);
//      const userObject = jwtDecode(res.credential)
//      console.log('userObject :', userObject);
//      setUser(userObject)
//      document.getElementById("signDiv").hidden = true;
//    }

//    const handleSignOut = (event) =>{
//     setUser({})
//     document.getElementById("signDiv").hidden = false;
//    }
//   const responseMessage = (response) => {
//     console.log(response);
//     navigate(GOOGLE_FORM);
//   };
//   const errorMessage = (error) => {
//     console.log(error);
//   };
//   // useEffect(() => {
//   //   const google = window.google;
//   //   google.accounts.id.initialize({
//   //     client_id:CLIENT_ID,
//   //     callback: handleCallBackRes
//   //   });
//   //   google.accounts.id.renderButton(document.getElementById("signDiv"),{theme:"outline", size:"large"});

//   //    google.accounts.oauth2.initTokenClient({
//   //      client_id: CLIENT_ID,
//   //      scope:SCOPE,
//   //      callback:(tokenResponse) => {
//   //      console.log('tokenResponse :', tokenResponse);

//   //      }
//   //    });

//   //   google.accounts.id.prompt();


//   // },[])
//   const googleLogin = useGoogleLogin({
//     flow: "auth-code",
//     onSuccess: async (codeResponse) => {
//       console.log(codeResponse);
//       const tokens = await axios.post("http://localhost:3000/auth/google", {
//         code: codeResponse.code,
//       });

//       console.log(tokens);
//     },
//     onError: (errorResponse) => console.log(errorResponse),
//   });
//   return (
//     <Wrapper>
//       <div className="modalInside">
//         <TitleTwoColor
//           title={"LET'S GET"}
//           titleSec={"STARTED"}
//           desc={
//             "Connect to your Google Ads account. We will use this to view and analyze your online advertising efforts on Google Ads."
//           }
//           boldDesc={
//             " We will never make any changes or modifications within your account."
//           }
//         />
//         {/* <GoogleLogin
//           onSuccess={responseMessage}
//           onError={errorMessage}
//           accessType="offline"
//           prompt="consent"
//           scopes={["https://www.googleapis.com/auth/adwords"]}
//         /> */}

//         <div id="signDiv"></div>
//         {/* <button className="buttonStyle" onClick={googleLogin}>
//           <img className={"modalIconStyle"} src={Google} alt={""} />
//           Sign in with Google{" "}
//         </button> */}
//       </div>
//     </Wrapper>
//   );
// };

// export default LetsStarted;
export default LetsStarted
