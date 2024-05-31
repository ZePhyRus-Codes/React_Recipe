import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import logo from "./1674_291296_10150_image-Photoroom.png";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/create-recipe">Create Recipe</Link>
        <Link to="/saved-recipes">Saved Recipes</Link>
        {!cookies.access_token ? (
          <Link to="/auth">Login/Register</Link>
        ) : (
          <button onClick={logout}> Logout </button>
        )}
      </div>
    </div>
  );
};
