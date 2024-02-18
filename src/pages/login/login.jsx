import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
const Login = () => {
  const [passwordShown, setPasswordShown] = useState(true);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form className=" container pt-5 w-50" onSubmit={handleSubmit}>
        <label htmlFor="userEmail">Email</label>
        <input
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z]{3,15}[1-8]{1,5}(@)(gmail|yahoo)(.com)$/,
          })}
          type="email"
          className="  my-2 form-control"
        />
        {errors.email && <p className=" text-danger">inValidEmail</p>}
        <label htmlFor="password">password</label>
        <div className=" d-flex flex-row ">
          <input
            {...register("password", { required: true })}
            type={passwordShown ? "password" : "text"}
            className="  my-2 form-control"
          />
          <MdRemoveRedEye onClick={togglePasswordVisiblity} />
        </div>
        {errors.password && <p className=" text-danger">password required</p>}

        <button className=" btn btn-dark text-white form-control">Login</button>
      </form>
    </>
  );
};
export default Login;
