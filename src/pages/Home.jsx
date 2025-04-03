import React from "react";
import { Shield, Award, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import icon1 from "../images/wpcion.png";
import icon2 from "../images/tiktokicon.png";
import icon3 from "../images/facebookicon.png";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                Tu camino hacia la libertad comienza aquí
              </motion.h1>
            </h1>
            <p className="text-xl mb-8">
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                Aprende a conducir con los mejores profesionales en nuestra Auto
                Escuela SCANIA
              </motion.p>
            </p>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="content-social">
                <div className="button-content">
                  <Link
                    to="/contacto"
                    className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
                  >
                    ¡Comienza Ahora!
                  </Link>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://api.whatsapp.com/send/?phone=59172012305&text&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    <img src={icon1} alt="whatsapp" className="socialIcon" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100063444146678"
                    target="_blank"
                  >
                    <img src={icon3} alt="facebook" className="socialIcon" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@ibethscania?_t=ZM-8vEQ7ngigMf&_r=1"
                    target="_blank"
                  >
                    <img src={icon2} alt="tiktok" className="socialIcon" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                ¿Por qué elegirnos?
              </motion.h2>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Seguridad Primero
                </h3>
                <p className="text-gray-600">
                  Priorizamos tu seguridad en cada lección
                </p>
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Instructores Certificados
                </h3>
                <p className="text-gray-600">
                  Equipo de profesionales con amplia experiencia
                </p>
              </div>
            </motion.div>

            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Horarios Flexibles
                </h3>
                <p className="text-gray-600">
                  Adaptamos las clases a tu disponibilidad
                </p>
              </div>
            </motion.div>

            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Atención Personalizada
                </h3>
                <p className="text-gray-600">
                  Seguimiento individual de tu progreso
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para comenzar tu Licencia?
          </h2>
          <p className="text-xl text-white mb-8">
            Obtén tu licencia de conducir con los mejores profesionales
          </p>
          <Link
            to="/precios"
            className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-red-200 transition-colors"
          >
            Ver Precios
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
