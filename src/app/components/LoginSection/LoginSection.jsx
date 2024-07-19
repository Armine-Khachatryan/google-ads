import React, { useEffect, useRef, useState } from "react";
import Google from "../../assets/icons/Google.svg";
// import Modal from "react-modal";
// Styles
import { Wrapper } from "./LoginSection.styles";
import TitleTwoColor from "../TitleTwoColor/TitleTwoColor";
import { useNavigate } from "react-router-dom";
import {GOOGLE_FORM, GOOGLE_FORM_ACCOUNT} from "../../router/router-path";
// import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useAppState } from '../../hooks/useForm';
import Spinner from "../Spinner/Spinner";

const CLIENT_ID =
  "203188833555-t51cvagdf8fjlihim8m831n4vv836apn.apps.googleusercontent.com";
const SCOPE = "https://www.googleapis.com/auth/adwords";

const LoginSection = () => {

  const navigate = useNavigate();
  const [data, setData]=useAppState()
  const [user, setUser] = useState({});
  const [tokenClient, setTokenClient] = useState({});
  const [tokenAds, setTokenAds] = useState("");
  const [tokens, setTokens]=useState({});
  const [accountData, setAccountData]= useState();
  // console.log('tokenAds :', tokenAds);
  const [loading, setLoading] = useState(false);
  const initRef = useRef(null);
  const handleConnect = () => {
    navigate(GOOGLE_FORM);
  };

  const handleCallBackRes = (res) => {
    console.log("JWT ID TOKEN", res.credential);
    const userObject = jwtDecode(res.credential);
    setUser(userObject);
    document.getElementById("signDiv").hidden = true;
    setLoading(true);
    sendJWTToken(res.credential);
  };

  let sendJWTToken = async (jwtToken) => {
    try {
      let response = await axios.post(
          'https://adsadmin.freniklabs.com/social_auth/google/',
                    // 'http://159.203.75.35:8000/social_auth/google/',
          {
            auth_token: jwtToken
          }
      );
      setTokens(response.data.tokens);
      localStorage.setItem("token", response.data.tokens.access);
    } catch (error) {
      console.log(error, "error");
    }
  };
  const handleSignOut = (event) => {
    setUser({});
    document.getElementById("signDiv").hidden = false;
  };
  const responseMessage = (response) => {
    console.log(response);
    navigate(GOOGLE_FORM);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  const getAnaliticaToken = () => {
    tokenClient.requestAccessToken();
  };
  useEffect(() => {
    setTimeout(() => {
      const google = window.google;
      google.accounts.id.initialize({
        client_id: CLIENT_ID,
        scope: SCOPE,
        callback: handleCallBackRes,
      });
      google.accounts.id.renderButton(document.getElementById("signDiv"), {
        theme: "outline",
        size: "large",
      });
      setTokenClient(
        google.accounts.oauth2.initTokenClient({
          client_id: CLIENT_ID,
          scope: SCOPE,
          callback: (tokenResponse) => {
            console.log("tokenResponse :", tokenResponse);
            setTokenAds(tokenResponse.access_token);
          },
        })
      );
      google.accounts.id.prompt();
    }, 1000);
  }, []);

  useEffect(() => {
    if (user?.email) {
      tokenClient?.requestAccessToken();
    }
  }, [user]);

  console.log(tokens.access, "tokens.accessheey")
  useEffect(() => {
    if (tokenAds !== "" && tokens.access !=="") {
      setLoading(false);
      socialAuth()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenAds]);
  console.log(tokenAds, "tokenAds")


  let socialAuth =async ()=>{
    try {
      // let response = await axios.post('http://159.203.75.35:8000/social_auth/google/list-accessible-customers/',
      let response = await axios.post('https://adsadmin.freniklabs.com/social_auth/google/list-accessible-customers/',

      {
        token: tokenAds
      }, {
            headers: {
              "Authorization": `Bearer ${tokens.access}`
            }
          }

      )
      let accountIds = [];
      // setAccountData(response.data.resourceNames.forEach(item => {
      //   let accountId = item.split('/')[1];
      //   accountIds.push(accountId);
      // }));
      response.data.resourceNames.forEach(item => {
        let accountId = item.split('/')[1];
        accountIds.push(accountId);
      });
      setAccountData(accountIds);
      navigate(GOOGLE_FORM);
      setData({ idData: accountIds,  userData: user})
      console.log(response.data, "reposnse")
  } catch (error) {
      console.log(error, "error")
    }
  }

  return (
    <Wrapper ref={initRef}>
      <div className="modalInside">
        <TitleTwoColor
          title={"LET'S GET"}
          titleSec={"STARTED"}
          desc={
            "Connect to your Google Ads account. We will use this to view and analyze your online advertising efforts on Google Ads."
          }
          boldDesc={
            " We will never make any changes or modifications within your account."
          }
        />
        {loading ? <Spinner /> : <div id="signDiv"></div>}
      </div>
    </Wrapper>
  );
};

export default LoginSection;
