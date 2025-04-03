import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Car, Brain, Menu, X } from "lucide-react";
import logo from "../images/LogoScania3.png";
import { useState } from "react";
import { div } from "motion/react-client";
import whatsapp from "../images/logo-wp.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path
      ? "text-red-500"
      : "text-gray-600 hover:text-red-600";
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Sobre Nosotros", path: "/sobre-nosotros" },
    { name: "Nuestras Cursos", path: "/servicios" },
    { name: "Precios", path: "/precios" },
    { name: "Contactos", path: "/contacto" },
  ];
  return (
    <div>
      <nav className="bg-white shadow-md fixed z-20" style={{ width: "100vw" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src={logo} style={{ width: "260px" }} />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({ name, path }) => (
                <Link
                  key={path}
                  to={path}
                  className={`text-gray-600 hover:text-red-600 transition-colors ${
                    location.pathname === path ? "font-bold text-red-600" : ""
                  }`}
                >
                  {name}
                </Link>
              ))}
              {/*<Link
              to="/sobre-nosotros"
              className={`${isActive(
                "/sobre-nosotros"
              )} transition-colors duration-200 font-medium`}
            >
              Sobre Nosotros
            </Link>
            <Link
              to="/servicios"
              className={`${isActive(
                "/servicios"
              )} transition-colors duration-200 font-medium`}
            >
              Servicios
            </Link>
            <Link
              to="/precios"
              className={`${isActive(
                "/precios"
              )} transition-colors duration-200 font-medium`}
            >
              Precios
            </Link>
            <Link
              to="/contacto"
              className={`${isActive(
                "/contacto"
              )} transition-colors duration-200 font-medium`}
            >
              Contacto
            </Link>*/}
            </div>
            {/* Botón Menú Hamburguesa */}
            <button className="md:hidden" onClick={toggleMenu}>
              {menuOpen ? (
                <X className="h-8 w-8 text-gray-800" />
              ) : (
                <Menu className="h-8 w-8 text-gray-800" />
              )}
            </button>
          </div>
        </div>
        {/* Menú Móvil */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md p-4 flex flex-col space-y-4 z-10">
            {navItems.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`text-gray-600 hover:text-red-600 transition-colors ${
                  location.pathname === path ? "font-bold text-red-600" : ""
                }`}
              >
                {name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <button className="button-wp">
        <a
          href="https://api.whatsapp.com/send/?phone=59172012305&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          <img src={whatsapp} alt="logo" className="whatsapp" />
        </a>
      </button>
    </div>
  );
};

export default Navbar;
