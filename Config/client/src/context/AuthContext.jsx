import { useState, useEffect, useContext, createContext } from "react";
import Cookies from "js-cookie";
import Axios from "../ApiService/Axios";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  //default axios

  useEffect(() => {
    const data = Cookies.get("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
      Axios.defaults.headers.common["Authorization"] = parseData?.token;
    }
    //eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
