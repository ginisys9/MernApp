import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://mernapp1-p41g.onrender.com/api/user/register',
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify(formData)
        }
      );

     const data =   await response.json();

      console.log(data)
      alert("Registration Successful");

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-md-5 mx-auto">
        <div className="card p-4 shadow border-0">
          <h2 className="text-center mb-4">
            Register
          </h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              className="form-control mb-3"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="form-control mb-3"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="form-control mb-3"
              onChange={handleChange}
            />

            <button className="btn btn-success w-100">
              Register
            </button>
          </form>

          <p className="text-center mt-3">
            Already have account?{" "}
            <Link to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
