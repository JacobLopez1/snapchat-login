import React, { useEffect } from "react";

const Login = () => {
  const clientId = "YOUR_CLIENT_ID";
  const redirectURI = "http://localhost:3000/home";

  const initSnapLogin = () => {
    if (window.snap) {
      window.snap.loginkit.mountButton("snap-login-button", {
        clientId: clientId,
        redirectURI: redirectURI,
        scopeList: ["user.display_name", "user.bitmoji.avatar"],
        handleResponseCallback: (response) => {
            if (response.access_token) {
              window.location.href = `${redirectURI}#access_token=${response.access_token}`;
            } else {
              console.error("No authorization code received.");
            }
          }          
      });
    } else {
      setTimeout(initSnapLogin, 50);
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.snapkit.com/js/v1/login.js";
    script.async = true;
    script.onload = initSnapLogin;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <h1>Login with Snapchat</h1>
      <div id="snap-login-button"></div>
    </div>
  );
};

export default Login;
