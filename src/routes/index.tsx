import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { useState } from "react";

const AppRouter = () => {
  const [user, setUser] = useState(true);
  return (
    <div>
      <Routes>
        <Route
          path={"/"}
          element={user ? <Home /> : <Navigate to="/signin" />}
        />
        <Route path={"/signin"} element={<SignIn />} />
        <Route path={"/signup"} element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
