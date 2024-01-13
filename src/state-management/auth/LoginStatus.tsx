import { useContext, useReducer, useState } from "react";
import AuthContext from "./authContext";
import useAuth from "./useAuth";
import useAuthStore from "./store";

const LoginStatus = () => {
  const { user, login, logout } = useAuthStore();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login("jay.yung")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
