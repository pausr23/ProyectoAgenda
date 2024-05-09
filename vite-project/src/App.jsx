import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./components/routes/Home.jsx";
import { About } from "./components/routes/About.jsx";
import { Contact } from "./components/routes/Contact.jsx";

import { Login } from "./components/routes/Login.jsx";
import { Signup } from "./components/routes/Signup.jsx";


import './index.css';

export function App() {
 
  return (
  <div >

    <Routes>
      <Route path="/*" element={<Navigate to="/" />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>

  </div>
  );

}

export default App
