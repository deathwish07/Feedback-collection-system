import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const {loading, login}=useLogin();

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    await login(email, password)
  }

  return (
    <>
      <div className=" m-auto w-1/2 shadow-lg mt-20">
        <p className=" text-3xl font-semibold text-center bg-indigo-500 p-2 text-white">
          Login Account
        </p>
        <form onSubmit={handleSubmit}>
        <div className=" m-10">
          <label> Email:</label>
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            required
          ></input>
          <label>Password:</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            required
          ></input>
          <div className=" my-2">
            <p>
              doesn't have an account?{" "}
              <Link to="/register" className=" text-blue-600">
                register now
              </Link>
            </p>
          </div>
          <div className=" text-center m-5 pb-5">
            <button className=" btn bg-indigo-500 text-white" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> :"Login"}
            </button>
          </div>
        </div>
        </form>
      </div>
    </>
  );
};

export default Login;
