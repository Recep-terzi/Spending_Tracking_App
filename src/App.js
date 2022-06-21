import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Singup from "./Components/Signup/Singup";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { authIsReady,user} = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={user ? <Home /> : <Login />}></Route>
            <Route path="/login" element={!user ? <Login /> : <Home />}></Route>
            <Route path="/signup" element={!user ? <Singup /> : <Home />}></Route>
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
