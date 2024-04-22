import { useContext, createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  function login(body) {
    fetch("http://127.0.0.1:8089/user/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) {
          console.error("Login failed");
        }
        return response.json();
      })
      .then((data) => {
        setUserInfo(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const values = {
    userInfo,
    login,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthInfo = () => {
  return useContext(AuthContext);
};
