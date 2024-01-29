import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  const [cakes, setCakes] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate()
  const url = "http://localhost:3000";
  // const url = "https://cake-recipes.onrender.com"

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser));
    }
    readCake();
  }, []);

  const signin = (userInfo) => {
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        localStorage.setItem("token", response.headers.get("Authorization"));
        return response.json();
      })
      .then((payload) => {
        localStorage.setItem("user", JSON.stringify(payload));
        setCurrentUser(payload);
      })
      .then(() => {
        navigate("/cakeindex");
      })
      .catch((error) => console.log("login errors: ", error));
  };

  const signup = (userInfo) => {
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        localStorage.setItem("token", response.headers.get("Authorization"));
        return response.json();
      })
      .then((payload) => {
        localStorage.setItem("user", JSON.stringify(payload));
        setCurrentUser(payload);
      })
      .then(() => {
        navigate("/cakeindex");
      })
      .catch((error) => console.log("login errors: ", error));
  };

  const signout = () => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      method: "DELETE",
    })
      .then((payload) => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setCurrentUser(null);
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log("log out errors: ", error));
  };

  const readCake = () => {
    fetch(`${url}/cakes`)
      .then((res) => res.json())
      .then((data) => setCakes(data))
      .catch((err) => console.error("Cake errors", err));
  };

  const createCake = (cake) => {
    fetch(`${url}/cakes`, {
      body: JSON.stringify(cake),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(() => readCake())
      .catch((error) => {
        console.log("Cake create error:", error);
      });
  };

  const updateCake = (cake, id) => {
    fetch(`${url}/cakes/${id}`, {
      body: JSON.stringify(cake),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => readCake())
      .catch((errors) => console.error("Cakes update errors:", errors));
  };

  const deleteCake = (id) => {
    fetch(`${url}/cakes/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => readCake())
      .catch((errors) => console.log("delete errors:", errors));
  };

  return (
    <>
      <div className="page">
        <Header currentUser={currentUser} signout={signout} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp signup={signup} />} />
          <Route path="/login" element={<SignIn signin={signin} />} />
          {currentUser && (
            <Route path="/cakeindex" element={<CakeIndex cakes={cakes} />} />
            // <Route
            //   path="/mycakes"
            //   element={
            //     <CakeProtectedIndex currentUser={currentUser} cakes={cakes} />
            //   }
            // />
          )}
          <Route
            path="/cakeshow/:id"
            element={<CakeShow cakes={cakes} deleteCake={deleteCake} />}
          />
          <Route
            path="/cakenew"
            element={
              <CakeNew
                cakes={cakes}
                createCake={createCake}
                currentUser={currentUser}
              />
            }
          />
          <Route
            path="/cakeedit/:id"
            element={<CakeEdit cakes={cakes} updateCake={updateCake} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
