import React, { useEffect } from "react";
import LoginForm from "./login-form/loginForm";
import "./login.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const Login = () => {
  const auth = useSelector((state) => state.auth.token);
  const history = useHistory();

  useEffect(() => {
    if (auth) history.push("/view-orders");
  }, [auth]);

  return (
    <div className="main-body">
      <h1 className="text-center">Login Screen</h1>
      <div className="d-flex justify-content-center mt-5">
        <LoginForm
          onLogin={() => {
            history.push("/view-orders");
          }}
        />
      </div>
    </div>
  );
};

export default Login;
