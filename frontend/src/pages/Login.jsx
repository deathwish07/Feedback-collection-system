import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className=" m-auto w-1/2 shadow-lg mt-20">
        <p className=" text-3xl font-semibold text-center bg-indigo-500 p-2 text-white">
          Login Account
        </p>
        <div className=" m-10">
          <label> Email:</label>
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="email"
            required
          ></input>
          <label>Password:</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="password"
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
            <button className=" btn bg-indigo-500 text-white">Login now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
