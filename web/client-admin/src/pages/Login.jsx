import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/actions/actionCreator";
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    dispatch(login(form));
    await Swal.fire({
      text: "Login Success",
      icon: "success",
      confirmButtonText: "Okay",
    });
    navigate("/");
  }

  return (
    <div className="col-6 mx-auto">
      <div className="bg-danger text-center mt-5">
        <img
          src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg"
          className="logo-login"
        />
      </div>
      <h1 className="text-center">Login</h1>
      <div className="card mx-auto">
        <form onSubmit={onSubmit}>
          <div className=" mt-3">
            <label className="form-label">
              Email <sup className="text-danger">*</sup>
            </label>

            <input
              type="email"
              name="email"
              id="email"
              pattern="[^ @]*@[^ @]*"
              className="form-control"
              placeholder="Email address"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-3">
            <label className="form-label">
              Password <sup className="text-danger">*</sup>
            </label>

            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mx-auto mt-5">
            <button type="submit" className="form-control btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
