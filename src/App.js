import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import SignUp from "./pages/SignUp.js";
import SignIn from "./pages/SignIn.js";
import CakeIndex from "./pages/CakeIndex.js";
import CakeProtectedIndex from "./pages/CakeProtectedIndex.js";
import CakeShow from "./pages/CakeShow.js";
import CakeNew from "./pages/CakeNew.js";
import CakeEdit from "./pages/CakeEdit.js";
import NotFound from "./pages/NotFound.js";
import mockUsers from "./mockUsers.js";
import mockCakes from "./mockCakes.js";
import "./App.css";

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0]);
  const [cakes, setCakes] = useState(mockCakes);

  return (
    <>
      <div className="page">
        <Header currentUser={currentUser} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/index" element={<CakeIndex cakes={cakes} />} />
          {currentUser && (
            <Route
              path="/mycakes"
              element={
                <CakeProtectedIndex currentUser={currentUser} cakes={cakes} />
              }
            />
          )}
          <Route path="/show/:id" element={<CakeShow cakes={cakes} />} />
          <Route path="/new" element={<CakeNew cakes={cakes} />} />
          <Route path="/edit/:id" element={<CakeEdit cakes={cakes} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
