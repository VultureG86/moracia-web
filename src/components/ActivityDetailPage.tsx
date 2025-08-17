import React, { useState } from 'react';

interface Activity {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  images: string[];
}

interface User {
  id: number;
  username: string;
  password: string;
  type: string;
  name: string;
  email: string;
}

interface ActivityDetailPageProps {
  selectedActivity: Activity | null;
  currentUser: User | null;
  onNavigate: (page: string) => void;
}

const ActivityDetailPage: React.FC<ActivityDetailPageProps> = ({ selectedActivity, currentUser, onNavigate }) => {
  const [newImage, setNewImage] = useState('');
  
  if (!selectedActivity) return <div>Actividad no encontrada</div>;

  const handleAddImage = () => {
    if (newImage.trim()) {
      // En un proyecto real, aquí se subiría la imagen a un servidor
      alert('Función de subida de imágenes pendiente de implementar con backend real');
      setNewImage('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <button
        onClick={() => onNavigate('activities')}
        className="mb-6 text-green-600 hover:text-green-800 flex items-center"
      >
        ← Volver a actividades
      </button>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-green-800 mb-6">{selectedActivity.name}</h1>
        <p className="text-xl text-gray-700 mb-8">{selectedActivity.fullDescription}</p>
        
        {/* Galería de fotos */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Galería de Fotos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {selectedActivity.images.map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt={`${selectedActivity.name} ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            ))}
          </div>
          
          {/* Formulario para subir imágenes (solo para usuarios registrados) */}
          {currentUser && (
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Subir Nueva Imagen</h3>
              <div className="flex gap-4">
                <input
                  type="url"
                  placeholder="URL de la imagen"
                  value={newImage}
                  onChange={(e) => setNewImage(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  onClick={handleAddImage}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Subir
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                * En un proyecto real, aquí se implementaría la subida real de archivos con backend
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityDetailPage;