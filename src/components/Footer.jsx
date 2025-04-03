import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import icon1 from "../images/wpcion.png";
import icon2 from "../images/tiktokicon.png";
import icon3 from "../images/facebookicon.png";
import { Link } from "react-router-dom";
import logo from "../images/LogoScania2.png";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <img src={logo} style={{ width: "260px" }} />
            </Link>
            <p className="text-gray-400 ">Camino hacia tu libertad</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                72012305
              </p>
              <p className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                autoescuelascania@gmail.com
              </p>
              <p className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                Av. Juan Pablo II esq. Cruz Papal No 2717, Zona FERROPETROL - El
                Alto
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://api.whatsapp.com/send/?phone=59172012305&text&type=phone_number&app_absent=0"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <img src={icon1} alt="whatsapp" style={{ width: "40px" }} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063444146678"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <img src={icon3} alt="facebook" style={{ width: "40px" }} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063444146678"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <img src={icon2} alt="tiktok" style={{ width: "40px" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Auto Escuela SCANIA. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
