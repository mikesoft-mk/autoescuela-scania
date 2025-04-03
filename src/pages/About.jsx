import React from "react";
import { Star, Users, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import banner from "../images/img5.jpg";
import banner2 from "../images/img3.jpeg";
import banner3 from "../images/img6.jpeg";
import historia from "../images/img35.jpeg";
import equipo from "../images/img30.jpeg";
import equipo2 from "../images/img15.jpeg";
import equipo3 from "../images/img5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState, useEffect, useRef } from "react";

const images = [banner, banner2, banner3];

const About = () => {
  const [current, setCurrent] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [count, setCount] = useState(4850);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Se activa cuando el 50% del componente es visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Solo inicia si el componente es visible

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 5000) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, [isVisible]);
  // Cambiar imagen automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="py-16">
      <div className="relative overflow-hidden w-full h-[600px]">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-[600px] object-cover transition-transform duration-[7s,15s] ease-in-out ${
              index === current
                ? "opacity-100 scale-125"
                : "opacity-0 scale-100"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <section>
          <div
            className="relative max-w-7xl mx-auto px-4 h-full flex items-center"
            style={{ width: "auto", height: "600px" }}
          >
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">
                <motion.h1
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  Sobre Nosotros
                </motion.h1>
              </h1>
              <p className="text-xl mb-8">
                <motion.p
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  Contamos con un equipo de profesionales <br /> altamente
                  calificados y apasionados por la enseñanza.
                </motion.p>
              </p>
            </div>
          </div>
        </section>

        {/* Botón Anterior */}
        <button
          onClick={() =>
            setCurrent((current - 1 + images.length) % images.length)
          }
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full z-10 font "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 15 15"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="square"
              d="M10 14L3 7.5L10 1"
              stroke-width="1"
            />
          </svg>
        </button>

        {/* Botón Siguiente */}
        <button
          onClick={() => setCurrent((current + 1) % images.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 15 15"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="square"
              d="m5 14l7-6.5L5 1"
              stroke-width="1"
            />
          </svg>
        </button>
      </div>

      {/*
      <div className="w-full h-100">
        {images.map((src, index) => (
          <section
            key={index}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-[500px] object-cover bg-center transition-opacity duration-500 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${src})`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </section>
        ))}


        <button
          onClick={() =>
            setCurrent((current - 1 + images.length) % images.length)
          }
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"
        >
          ◀
        </button>

        <button
          onClick={() => setCurrent((current + 1) % images.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"
        >
          ▶
        </button>
      </div>*/}

      {/*
      <Swiper navigation={true} modules={[Navigation]} className="w-full h-100">
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <section
              className={`relative w-full h-[500px] object-cover bg-center transition-opacity duration-500 ${
                index === current ? "opacity-100" : "opacity-0 hidden"
              }`}
              style={{
                backgroundImage: `url(${src})`,
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
                      Sobre Nosotros
                    </motion.h1>
                  </h1>
                  <p className="text-xl mb-8">
                    <motion.p
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                    >
                      Contamos con un equipo de profesionales <br /> altamente
                      calificados y apasionados por la enseñanza.
                    </motion.p>
                  </p>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 pt-20 ">
            Sobre Nosotros
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Con más de una década de experiencia, somos líderes en la formación
            de conductores responsables y seguros.
          </p>
        </div>

        {/* Historia */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={historia}
              alt="Nuestra Historia"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="text-justify">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestra Historia
            </h2>
            <p className="text-gray-600 mb-4">
              Fundada en 2009, AutoEscuela Elite nació con la finalidad de para
              de mejorar la conducción segura en las vías públicas y promover la
              concienciación sobre la educación y seguridad vial
            </p>
            <p className="text-gray-600">
              Hoy, más de una década después, nos hemos convertido en una de las
              autoescuelas más respetadas de la región, la Autoescuela “SCANIA”
              se ubicó en la Avenida Bolivia No. 404, en la zona Pacajes,
              Caluyo, Distrito 3 de la ciudad de El Alto. Con el paso del tiempo
              y alta demanda la auto escuela se trasladó a la Avenida Juan Pablo
              II, en la zona FERROPETROL de El Alto.
            </p>
          </div>
        </div>
        <div className="card-content">
          <div className="card">
            <div className="sub-title">
              <h2>Misión de “SCANIA”</h2>
            </div>
            <p className="text-justify">
              Nuestra misión es capacitar nuevos conductores tanto en teoría
              como en práctica, enfatizando un alto grado de concienciación y de
              responsabilidad individual en materia de conocimiento y respeto de
              la educación vial al momento de estar frente al volante y se
              conviertan en ejemplo para otros conductores (Manual de funciones,
              2022).
            </p>
          </div>
          <div className="card">
            <div className="sub-title">
              <h2>Visión de “SCANIA”</h2>
            </div>

            <p className="text-justify">
              Nuestro propósito es consolidarnos entre los primeros proveedores
              de servicios de capacitación del departamento de La Paz en la
              enseñanza de la conducción de vehículos motorizados terrestres de
              dos y cuatro ruedas (Manual de funciones, 2022).
            </p>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">15+</h3>
            <p className="text-gray-600">Años de Experiencia</p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900" ref={counterRef}>
              {count} +
            </h3>
            <p className="text-gray-600">Alumnos Graduados</p>
          </div>
          <div className="text-center">
            <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">98%</h3>
            <p className="text-gray-600">Tasa de Aprobación</p>
          </div>
          <div className="text-center">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">15+</h3>
            <p className="text-gray-600">Instructores Certificados</p>
          </div>
        </div>

        {/* Equipo */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Contamos con un equipo de profesionales altamente cualificados y
            apasionados por la enseñanza.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Antonio Ponce Quispe",
              role: "Director General",
              image: equipo,
            },
            {
              name: "Miguel García",
              role: "Instructor Principal",
              image: equipo2,
            },
            {
              name: "Equipo de SCANIA",
              role: "Instructores Experimentados",
              image: equipo3,
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
