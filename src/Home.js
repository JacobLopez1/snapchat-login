import React, { useEffect, useState } from "react";

const Home = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.hash.substr(1));
    const accessToken = urlParams.get('access_token');
  
    if (accessToken) {
      fetch('https://kit.snapchat.com/v1/me?query=%7Bme%20%7Bbitmoji%20%7Bavatar%7D%2C%20displayName%7D%7D', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUserInfo(data.data.me);
        });
    }
  }, []);  
  

  return (
    <div>
      {userInfo ? (
        <>
          <h2>Welcome, {userInfo.displayName}!</h2>
          {userInfo.bitmoji && userInfo.bitmoji.avatar && (
            <img src={userInfo.bitmoji.avatar} alt="User Bitmoji" />
          )}
        </>
      ) : (
        <p>Error: No authorization code received.</p>
      )}
    </div>
  );
};

export default Home;
