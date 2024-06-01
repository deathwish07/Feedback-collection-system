import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";


const Register = () => {

  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    contactno: "",
    password: "",
    confirmPassword: "",
  })

  const {loading, signup}= useSignup()

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    await signup(inputs)
  }


  return (
    <>
      <div className=" m-auto w-1/2 shadow-lg mt-20">
        <p className="text-3xl font-semibold text-center bg-indigo-500 p-2 text-white">
          Create an Account
        </p>
        <form onSubmit={handleSubmit}>
        <div className=" m-10">
          <label>Full Name:</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="full name"
            value={inputs.fullName}
            onChange={(e) => setInputs({...inputs, fullName: e.target.value })}
            required
          ></input>
          <label>Email:</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="email"
            value={inputs.email}
            onChange={(e) => setInputs({...inputs, email: e.target.value })}
            required
          ></input>
          <label>Contact no:</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Contact number"
            value={inputs.contactno}
            onChange={(e) => setInputs({...inputs, contactno: e.target.value })}
            required
          ></input>
          <label>Password:</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="password"
            value={inputs.password}
            onChange={(e) => setInputs({...inputs, password: e.target.value })}
            required
          ></input>
          <label>Confirm Password:</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="confirm password"
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value })}
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
        </form>
      </div>
    </>
  );
};

export default Register;
