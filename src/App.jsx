import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import UserRegistration from "./pages/UserRegistration";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route
            path="/AccountCreation"
            element={<UserRegistration></UserRegistration>}
          ></Route>
          <Route
            path="/ForgotPassword"
            element={<ForgotPassword></ForgotPassword>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
