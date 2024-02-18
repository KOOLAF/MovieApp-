import React from "react";
import { useForm } from "react-hook-form";
const Reg = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <>
      <form className=" container pt-5 w-50" onSubmit={handleSubmit()}>
        <label htmlFor="userName">Name</label>
        <input
          {...register("name", {
            required: true,
            pattern: /^[a-zA-Z]{3,15}$/,
          })}
          type="text"
          className="  my-2 form-control"
        />
        {errors.name && <p className=" text-danger">inValidName</p>}
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
        <label htmlFor="user">userName</label>
        <input
          {...register("userName", {
            required: true,
            pattern: /^[a-zA-Z]{3,5}[\S]*$/,
          })}
          type="text"
          className="  my-2 form-control"
        />
        {errors.userName && <p className=" text-danger">inValiduserName</p>}
        <label htmlFor="password">Password</label>
        <div className="d-flex flex-row">
          <input
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^[a-zA-z]{8,}[1-6][$|&|+|,|:|;|=|?|@|#|'|<|>|.|-|^|*|(|)|%|!]$/,
                message: "Invalid password format",
              },
            })}
            type="password"
            className="my-2 form-control"
          />
        </div>
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}

        <label htmlFor="reEnterPassword">password</label>
        <div className="d-flex flex-row">
          <input
            {...register("reEnteredpassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            type="password"
            className="my-2 form-control"
          />
        </div>
            //KolaKola1@
        {errors.reEnteredpassword && (
          <p className="text-danger">passwordNotMatch</p>
        )}

        <button className=" btn btn-dark text-white form-control">
          Register
        </button>
      </form>
    </>
  );
};
export default Reg;
