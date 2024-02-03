import Navbar from "./Navbar.jsx"
import Contacts from "./Pages/Contacts.jsx"
import Home from "./Pages/Home.jsx"
import RegistrationForm from "./Pages/RegtrationForm.jsx"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/registration-form" element={<RegistrationForm />} />
        </Routes>
      </div>
    </>
  )
}

export default App