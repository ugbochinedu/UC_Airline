import {Route, Routes, Navigate} from "react-router-dom";
import Signup from "./auth/SignUp1";
import Login from "./auth/Login";

// import SignUp from "./auth/SignUp";



function App() {
  return (
    <Routes>
      hello World
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" exact element={<Navigate replace to = "/login" />} />
    </Routes>
    // <div>
    //   <SignUp />
    // </div>
  );
}

export default App;
