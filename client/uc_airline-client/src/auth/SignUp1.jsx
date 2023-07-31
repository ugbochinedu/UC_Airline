import styles from "./signUp1.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { registerUrl } from "../api/Api";

const Signup = () => {
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userName: "",
    phoneNumber: "",
  };

  const [data, setData] = useState(initialValue);
  // const [error, setError] = useState();

  const navigate = useNavigate();

  // const handleChange = ({currentTarget: input}) =>{
  //   setData({...data, [input.name]: input.value});
  // }
    const handleChange = async (e) => {
      e.preventDefault();
      setData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }; 

  const handleSubmit = async (e) =>{
    e.preventDefault();
     const userData = {
       userName: data.userName,
       firstName: data.firstName,
       lastName: data.lastName,
       email: data.email,
       phoneNumber: data.phoneNumber,
       password: data.password,
     };
       const response = await axios.post(registerUrl, userData);

       if (response.status === 200) {
         console.log("BC res -->", response.data);
       }
       navigate("/login");

    // try {
    //     const url = "http://localhost:8081/api/v1/UC_airline";
    //     const { data: res } = await axios.post(registerUrl, data);
    //     navigate("/login")
    //     console.log("message: it is in");
    //     console.log(res.message);
       
    // } catch (error) {
    //     if(error.response && error.response.status >= 400 && error.response.status <=500){
    //         setError(error.response.data.message)
    //     }
    // }
  }

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Sign in
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              className={styles.input}
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              name="firstName"
              value={data.firstName}
              required
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              name="lastName"
              value={data.lastName}
              required
            />
            <input
              className={styles.input}
              type="text"
              placeholder="UserName"
              onChange={handleChange}
              name="userName"
              value={data.userName}
              required
            />
            <input
              className={styles.input}
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={data.email}
              required
            />
            <input
              className={styles.input}
              type="number"
              placeholder="Phone Number"
              onChange={handleChange}
              name="phoneNumber"
              value={data.phoneNumber}
              required
            />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={data.password}
              required
            />
            {/* {error && <div className={styles.error_msg}>{error}</div>} */}
            <button type="submit" className={styles.green_btn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
