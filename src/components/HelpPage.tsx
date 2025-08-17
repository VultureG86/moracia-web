import React from 'react';
import { HelpCircle, Phone, Mail } from 'lucide-react';

const faqs = [
  {
    question: "¿Cómo puedo participar en las actividades de la ADI?",
    answer: "Puede participar contactándonos directamente, asistiendo a nuestras reuniones mensuales o siguiendo nuestras redes sociales para estar al tanto de las próximas actividades."
  },
  {
    question: "¿Cuál es el horario de atención de la oficina?",
    answer: "Nuestra oficina atiende de lunes a viernes de 8:00 AM a 4:00 PM. Los sábados atendemos de 8:00 AM a 12:00 PM."
  },
  {
    question: "¿Cómo puedo hacer una donación a la ADI?",
    answer: "Puede hacer donaciones en efectivo en nuestra oficina, por transferencia bancaria, o participando en nuestras actividades de recaudación de fondos."
  },
  {
    question: "¿La ADI ofrece servicios de capacitación?",
    answer: "Sí, ofrecemos diversos programas de capacitación incluyendo alfabetización digital, emprendimiento, y desarrollo de habilidades técnicas."
  },
  {
    question: "¿Cómo puedo reportar un problema en la comunidad?",
    answer: "Puede reportar problemas visitando nuestra oficina, llamando al teléfono de contacto, o enviando un mensaje por WhatsApp."
  },
  {
    question: "¿Qué requisitos necesito para ser miembro de la ADI?",
    answer: "Para ser miembro debe ser mayor de edad, residir en la comunidad de Moracia o zonas aledañas, y participar activamente en las actividades comunitarias."
  },
  {
    question: "¿Cuándo se realizan las reuniones de la junta directiva?",
    answer: "Las reuniones de la junta directiva se realizan el primer sábado de cada mes a las 2:00 PM en el centro comunitario."
  },
  {
    question: "¿Cómo puedo proponer un nuevo proyecto para la comunidad?",
    answer: "Puede presentar su propuesta por escrito en nuestra oficina o durante las reuniones mensuales. La junta directiva evaluará la viabilidad del proyecto."
  }
];

interface HelpPageProps {
  onNavigate: (page: string) => void;
}

const HelpPage: React.FC<HelpPageProps> = ({ onNavigate }) => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Centro de Ayuda</h1>
        <p className="text-xl text-gray-600">Preguntas frecuentes y información útil</p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-start">
              <HelpCircle className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-green-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-4">¿No encontraste lo que buscabas?</h2>
        <p className="text-gray-700 mb-6">Contáctanos directamente y te ayudaremos con gusto</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+50685502659"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
          >
            <Phone className="w-5 h-5 mr-2" />
            Llamar: +506 8550 2659
          </a>
          <button
            onClick={() => onNavigate('contact')}
            className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors flex items-center justify-center"
          >
            <Mail className="w-5 h-5 mr-2" />
            Enviar mensaje
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;