import React from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Categoría B-C",
      price: "250bs",
      features: [
        "1 hora de practica antes de su examen",
        "Mismo Vehiculo en la practica y examen",
        "Instructor personal",
      ],
      recommended: true,
    },
    {
      name: "Categoría B-C",
      price: "500bs",
      features: [
        "1 semana de clases prácticas",
        "Conducción individual",
        "Instructor profesional",
        "Horarios de 7:00 am a 19:00 pm",
      ],
      recommended: true,
    },
    {
      name: "Categoría P-A",
      price: "750bs",
      features: [
        "2 semanas de clases prácticas",
        "Conducción individual",
        "Cursos personalizados",
        "Instructor experto",
      ],
      recommended: true,
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 pt-9">
            Nuestros Precios
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diseñados para adaptarse a tus necesidades y presupuesto
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg overflow-hidden ${
                plan.recommended
                  ? "border-2 border-red-600 transform scale-105"
                  : "border border-gray-200"
              }`}
            >
              <div className="p-8 bg-white">
                {plan.recommended && (
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    Facturado
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full mt-8 px-4 py-2 rounded-lg font-medium transition-colors ${
                    plan.recommended
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Seleccionar Categoria
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "¿Tiene otros cursos?",
                answer:
                  "Si contamos con todo tipo de cursos personales adaptados a las necesidades de cada alumno.",
              },
              {
                question: "¿Que costo tiene los examenes y certificaciones?",
                answer:
                  "Segun la catagoria que escoga los precios pueden variar.",
              },
              {
                question: "¿Puedo cambiar de categoria durante el curso?",
                answer:
                  "Sí, puedes cambiar de categoria en cualquier momento, pagando solo la diferencia.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
