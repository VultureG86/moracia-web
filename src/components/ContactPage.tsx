import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';

const ContactPage = () => {
  const [contactForm, setContactForm] = useState({ 
    name: '', 
    email: '', 
    subject: '', 
    message: '' 
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // En un proyecto real, aquí se enviaría el mensaje por email
    alert('Mensaje enviado correctamente. Te responderemos pronto.');
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Contáctanos</h1>
        <p className="text-xl text-gray-600">Estamos aquí para ayudarte</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Información de contacto */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Información de Contacto</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-green-600 mr-4" />
                <div>
                  <p className="font-semibold">Dirección</p>
                  <p className="text-gray-600">Moracia, Nicoya, Guanacaste, Costa Rica</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-green-600 mr-4" />
                <div>
                  <p className="font-semibold">Teléfono</p>
                  <p className="text-gray-600">+506 8550 2659</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-green-600 mr-4" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">info@adimoracia.org</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-green-800 mb-4">Horarios de Atención</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Lunes - Viernes:</strong> 8:00 AM - 4:00 PM</p>
              <p><strong>Sábados:</strong> 8:00 AM - 12:00 PM</p>
              <p><strong>Domingos:</strong> Cerrado</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-green-800 mb-4">Síguenos en Redes Sociales</h3>
            <div className="space-y-3">
              <a
                href="https://facebook.com/ADIMoraciaNicoya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Facebook className="w-6 h-6 mr-2" />
                Facebook: ADI Moracia Nicoya
              </a>
              <a
                href="https://wa.me/50685502659"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-600 hover:text-green-800 transition-colors"
              >
                <Phone className="w-6 h-6 mr-2" />
                WhatsApp: +506 8550 2659
              </a>
            </div>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-green-800 mb-6">Envíanos un Mensaje</h2>
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                required
                value={contactForm.name}
                onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Ingrese su nombre completo"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Correo electrónico *
              </label>
              <input
                type="email"
                required
                value={contactForm.email}
                onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="su.email@ejemplo.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Asunto *
              </label>
              <input
                type="text"
                required
                value={contactForm.subject}
                onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Tema de su consulta"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje *
              </label>
              <textarea
                required
                rows={5}
                value={contactForm.message}
                onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Escriba aquí su mensaje o consulta..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Enviar Mensaje
            </button>
          </form>
          
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>Nota:</strong> También puedes contactarnos directamente por WhatsApp haciendo clic en el botón flotante 
              de la esquina inferior derecha o visitando nuestra página de Facebook.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;