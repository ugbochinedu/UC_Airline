import styles from "./Login.module.css";
import { Link} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { registerUrl } from "../api/Api";

const Login = () => {
  const initialValue = {
    email: "",
    password: "",
    userName: "",
  };

  const [data, setData] = useState(initialValue);
  const [error, setError] = useState();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const url = "http://localhost:8081/api/v1/UC_airline";
      const { data: res } = await axios.post(registerUrl, data);
      localStorage.setItem("token", res.data)
      window.location ="/"
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            {/* <input
              className={styles.input}
              type="text"
              placeholder="UserName"
              onChange={handleChange}
              name="userName"
              value={data.userName}
              required
            /> */}
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
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={data.password}
              required
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here?</h1>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
