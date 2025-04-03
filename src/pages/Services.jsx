import React from "react";
import {
  Car,
  BookOpen,
  ClipboardCheck,
  Users,
  Calendar,
  Shield,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import banner from "../images/img36.jpeg";
import banner2 from "../images/img13.jpeg";
import banner3 from "../images/img1.jpeg";

const images = [banner, banner2, banner3];

const Services = () => {
  const [current, setCurrent] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [count, setCount] = useState(4850);
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
                  Nuestros Cursos
                </motion.h1>
              </h1>
              <p className="text-xl mb-8">
                <motion.p
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  Ofrecemos una amplia gama de servicios diseñados para ayudarte
                  <br />a convertirte en un conductor seguro y confiado.
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 pt-10">
            Nuestros Cursos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios diseñados para ayudarte a
            convertirte en un conductor seguro y confiado.
          </p>
        </div>

        {/* Servicios Principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Car,
              title: "Clases Prácticas",
              description:
                "Aprende a conducir con nuestros vehículos modernos y totalmente equipados. Clases personalizadas según tu nivel y necesidades.",
            },
            {
              icon: BookOpen,
              title: "Clases Teóricas",
              description:
                "Preparación completa para el examen teórico con materiales actualizados y profesores expertos.",
            },
            {
              icon: ClipboardCheck,
              title: "Exámenes de Práctica",
              description:
                "Simulacros de examen para prepararte completamente antes de la prueba oficial.",
            },
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <service.icon className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Características Adicionales */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Características Destacadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Clases Personalizadas",
                description:
                  "Adaptamos nuestras clases a tu ritmo de aprendizaje y necesidades específicas.",
              },
              {
                icon: Calendar,
                title: "Horarios Flexibles",
                description:
                  "Ofrecemos horarios adaptables a tu disponibilidad, incluyendo fines de semana.",
              },
              {
                icon: Shield,
                title: "Garantía de Calidad",
                description:
                  "Compromiso con tu aprendizaje hasta que obtengas tu licencia.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-start">
                <feature.icon className="h-8 w-8 text-red-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contáctanos hoy mismo y comienza tu camino hacia la licencia de
            conducir
          </p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
            Reservar Clase de Prueba
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
