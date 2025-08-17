import React from 'react';

const activities = [
  {
    id: 1,
    name: "Topes",
    description: "Tradicionales topes con participación de jinetes de toda la región.",
    fullDescription: "Los topes son una tradición muy arraigada en Moracia, donde jinetes de toda Guanacaste se reúnen para mostrar sus mejores caballos y habilidades ecuestres. Este evento se realiza durante las fiestas patronales y es uno de los más esperados por la comunidad.",
    images: ["/assets/tope.jpg", "/assets/tope2.jpg", "/assets/tope3.jpg"]
  },
  {
    id: 2,
    name: "Bailes",
    description: "Bailes populares con música en vivo y DJ.",
    fullDescription: "Los bailes populares son organizados mensualmente en el salón comunal, featuring tanto música tradicional costarricense como música moderna. Estos eventos fortalecen la cohesión social y recaudan fondos para proyectos comunitarios.",
    images: ["/assets/baile.jpg", "/assets/baile2.jpg", "/assets/baile2.jpg"]
  },
  {
    id: 3,
    name: "Partidos",
    description: "Torneos de fútbol y otros deportes comunitarios.",
    fullDescription: "Los torneos deportivos incluyen fútbol masculino y femenino, voleibol y baloncesto. Participan equipos de diferentes comunidades cercanas, promoviendo el deporte y la sana competencia.",
    images: ["/assets/partidos.jpg", "https://via.placeholder.com/300x200", "https://via.placeholder.com/300x200"]
  },
  {
    id: 4,
    name: "Ventas",
    description: "Ventas de comida típica y productos locales.",
    fullDescription: "Las ventas comunitarias incluyen comida típica preparada por las familias de Moracia, así como productos agrícolas locales. Estos eventos apoyan la economía familiar y promueven los productos de la zona.",
    images: ["/assets/toros.jpg", "/assets/toros2.jpg", "/assets/toros3.jpg"]
  },
  {
    id: 5,
    name: "Recolección de Fondos",
    description: "Actividades especiales para financiar proyectos comunitarios.",
    fullDescription: "Las actividades de recolección de fondos incluyen rifas, bingos, y eventos especiales organizados para financiar proyectos de infraestructura y programas sociales en beneficio de toda la comunidad.",
    images: ["/assets/recoleccion.jpg", "/assets/recoleccion2.jpg", "https://via.placeholder.com/300x200"]
  },
  {
    id: 6,
    name: "Fiestas Populares",
    description: "Celebraciones tradicionales de la comunidad.",
    fullDescription: "Las fiestas populares incluyen las celebraciones patrias, fiestas patronales, y otras celebraciones tradicionales que mantienen vivas las costumbres y tradiciones de Moracia.",
    images: ["/assets/toros.jpg", "/assets/toros2.jpg", "/assets/toros3.jpg"]
  }
];

interface Activity {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  images: string[];
}

interface ActivitiesPageProps {
  onSelectActivity: (activity: Activity) => void;
  onNavigate: (page: string) => void;
}

const ActivitiesPage: React.FC<ActivitiesPageProps> = ({ onSelectActivity, onNavigate }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Nuestras Actividades</h1>
        <p className="text-xl text-gray-600">Eventos y actividades que organizamos durante el año</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map(activity => (
          <div key={activity.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img src={activity.images[0]} alt={activity.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-2">{activity.name}</h3>
              <p className="text-gray-600 mb-4">{activity.description}</p>
              <button
                onClick={() => {
                  onSelectActivity(activity);
                  onNavigate('activity-detail');
                }}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Ver detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesPage;