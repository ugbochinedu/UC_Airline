import React, { useState } from "react";
import {registerUrl} from '../api/Api'
import axios from "axios";

const SignUp = () => {
    const initialValue = {
        firstName : '',
        lastName : '',
        email: '',
        phoneNumber: '',
        password: '',
        userName: '',
    }

    const [data, setData] = useState(initialValue)
    
    const handleChange = async e =>{
        e.preventDefault();
        setData (prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    } 
    

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const userData ={
            userName : data.userName,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            password: data.password
        }
        
        // const response = await fetch(registerUrl, data)
        // .then((res) =>{
        //    res.json()
        // })
        // .then((response) =>{
        //     console.log('sign up data', response)
        // })
        // .catch((error)=>{
        //     console.log('signup error', error)
        // })

        const response = await axios.post(registerUrl, userData);

        if(response.status === 200){
            console.log('BC res -->', response.data)
        }
    }

    return (
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">
              {" "}
              FirstName:{" "}
              <input
                value={data.firstName}
                name="firstName"
                onChange={handleChange}
                type="text"
              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              {" "}
              LastName:{" "}
              <input
                value={data.lastName}
                name="lastName"
                onChange={handleChange}
                type="text"
              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              {" "}
              email:{" "}
              <input
                value={data.email}
                name="email"
                onChange={handleChange}
                type="email"
              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              {" "}
              UserName:{" "}
              <input
                value={data.userName}
                name="userName"
                onChange={handleChange}
                type="text"
              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              {" "}
              PhoneNumber:{" "}
              <input
                value={data.phoneNumber}
                name="phoneNumber"
                onChange={handleChange}
                type="tel"
              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              {" "}
              Password:{" "}
              <input
                value={data.password}
                name="password"
                onChange={handleChange}
                type="pasword"
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default SignUp