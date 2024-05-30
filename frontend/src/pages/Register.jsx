import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className=" m-auto w-1/2 shadow-lg mt-20">
        <p className="text-3xl font-semibold text-center bg-indigo-500 p-2 text-white">
          Create an Account
        </p>
        <div className=" m-10">
          <label>Full Name:</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="full name"
            required
          ></input>
          <label>Email:</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="full name"
            required
          ></input>
          <label>Contact no:</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="full name"
            required
          ></input>
          <label>Password:</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="password"
            required
          ></input>
          <div>
            <p className=" my-4">
              already have an account?{" "}
              <Link to="/login" className=" text-blue-400">
                login here
              </Link>
            </p>
          </div>
          <div className=" text-center m-5 pb-5">
            <button className=" btn bg-indigo-500 text-white">
              Register now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
