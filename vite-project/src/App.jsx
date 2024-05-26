import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./components/routes/Home.jsx";
import { About } from "./components/routes/About.jsx";
import { Admin } from "./components/routes/Admin.jsx";
import { Activities } from "./components/routes/Activities.jsx";
import { Dashboard } from "./components/routes/Dashboard.jsx";
import { Questions } from "./components/routes/Questions.jsx";

import { Login } from "./components/routes/Login.jsx";
import { Signup } from "./components/routes/Signup.jsx";

import { Profile } from "./components/routes/Profile.jsx";

import './index.css';

export function App() {
 
  return (
          <div >
              <Routes>
                    <Route path="/*" element={<Navigate to="/" />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/activities" element={<Activities />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/questions" element={<Questions />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/profile" element={<Profile />} />
              </Routes>
          </div>
  );
}

export default App