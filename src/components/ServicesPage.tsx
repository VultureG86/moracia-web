import React from 'react';
import { Book, Star, Award, Users, Settings, Calendar, ChevronRight } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: "Educación y Capacitación Comunitaria",
      description: "Programas educativos para todas las edades, incluyendo alfabetización digital, capacitación técnica y desarrollo de habilidades.",
      icon: <Book className="w-12 h-12 text-green-600" />,
      details: [
        "Cursos de computación básica",
        "Talleres de emprendimiento",
        "Programas de alfabetización",
        "Capacitación en oficios"
      ]
    },
    {
      title: "Proyectos de Innovación Social",
      description: "Iniciativas que buscan soluciones creativas a los desafíos comunitarios mediante la participación ciudadana.",
      icon: <Star className="w-12 h-12 text-blue-600" />,
      details: [
        "Huertos comunitarios",
        "Reciclaje y medio ambiente",
        "Programas para adultos mayores",
        "Iniciativas juveniles"
      ]
    },
    {
      title: "Desarrollo Económico Local",
      description: "Apoyo a emprendedores locales y promoción de la economía comunitaria a través de diversos programas.",
      icon: <Award className="w-12 h-12 text-yellow-600" />,
      details: [
        "Microcréditos comunitarios",
        "Ferias de emprendedores",
        "Promoción del turismo rural",
        "Mercados locales"
      ]
    },
    {
      title: "Cultura y Deporte",
      description: "Actividades culturales y deportivas que fortalecen la identidad comunitaria y promueven estilos de vida saludables.",
      icon: <Users className="w-12 h-12 text-red-600" />,
      details: [
        "Festivales culturales",
        "Torneos deportivos",
        "Clases de baile tradicional",
        "Actividades para niños"
      ]
    },
    {
      title: "Infraestructura Comunitaria",
      description: "Gestión y mejoramiento de la infraestructura local para beneficio de toda la comunidad.",
      icon: <Settings className="w-12 h-12 text-purple-600" />,
      details: [
        "Mejoramiento de caminos",
        "Sistemas de agua potable",
        "Alumbrado público",
        "Espacios recreativos"
      ]
    },
    {
      title: "Acceso a Tecnologías Emergentes",
      description: "Programas para reducir la brecha digital y facilitar el acceso a nuevas tecnologías.",
      icon: <Calendar className="w-12 h-12 text-indigo-600" />,
      details: [
        "Internet comunitario",
        "Capacitación en redes sociales",
        "Servicios digitales",
        "Plataformas online"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Nuestros Servicios</h1>
        <p className="text-xl text-gray-600">Programas y servicios que ofrecemos a la comunidad</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.details.map((detail, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-700">
                  <ChevronRight className="w-4 h-4 text-green-600 mr-2" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;