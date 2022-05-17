import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  const responseGoogle = response => {
    console.log(response);
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    setLoginStatus(true);
  };
  const logout = () => {
    console.log("logout");
    setLoginStatus(false);
  };
  return (
    <div className="App">
      {!loginStatus && (
        <GoogleLogin
          clientId="761006761068-iipj6sdg8fadoi078nqq988d4c54rpj5.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      )}
      {loginStatus && (
        <div>
          <h2>Welcome {name} &nbsp; Email: {email}</h2>
          <img src={url} alt={name} />
          <br />
          <GoogleLogout
            clientId="761006761068-iipj6sdg8fadoi078nqq988d4c54rpj5.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
            
          />
        </div>
      )}
    </div>
  );
}