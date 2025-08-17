import React, { useState } from 'react';
import { User, Settings, LogOut, Phone, Mail, MapPin, Facebook, Users, Calendar, Book, HelpCircle, Star, Award, Heart, Target, Eye, History, ChevronRight, Menu, X } from 'lucide-react';
import ServicesPage from './components/ServicesPage';
import ActivitiesPage from './components/ActivitiesPage';
import ActivityDetailPage from './components/ActivityDetailPage';
import HelpPage from './components/HelpPage';
import ContactPage from './components/ContactPage';
import { motion, AnimatePresence } from "framer-motion"


// Simulación de base de datos local
const initialUsers = [
  { id: 1, username: 'admin', password: 'admin123', type: 'admin', name: 'Administrador ADI', email: 'admin@adimoracia.org' },
  { id: 2, username: 'usuario1', password: 'user123', type: 'regular', name: 'Juan Pérez', email: 'juan@email.com' }
];

// Datos de ejemplo
const newsData = [
  {
    id: 1,
    title: "Nueva Infraestructura Comunitaria en Moracia",
    summary: "Se inaugura el nuevo centro comunitario que beneficiará a más de 500 familias de la zona.",
    content: "La Asociación de Desarrollo Integral de Moracia se enorgullece en anunciar la inauguración del nuevo centro comunitario.",
    date: "2025-01-15",
    image: "/assets/infraestructura.jpg"
  },
  {
    id: 2,
    title: "Programa de Capacitación Digital 2025",
    summary: "Inicia el nuevo programa de alfabetización digital para adultos mayores de la comunidad.",
    content: "Con el objetivo de reducir la brecha digital, la ADI Moracia lanza su programa de capacitación digital.",
    date: "2025-01-10",
    image: "/assets/educacion.jpg"
  },
  {
    id: 3,
    title: "Festival Cultural Moracia 2025",
    summary: "Se anuncia la fecha del tradicional festival que celebra nuestra cultura local.",
    content: "El Festival Cultural Moracia 2025 se realizará del 15 al 17 de marzo en el parque central.",
    date: "2025-01-05",
    image: "/assets/cultural.jpg"
  }
];

const boardMembers = [
  { name: "Jose Perez Hernandez", position: "Presidente", image: "/assets/user_icon.jpg" },
  { name: "Manuel Leandro Obando", position: "Vicepresidente", image: "/assets/user_icon.jpg" },
  { name: "Lorenzo Gomez Obando", position: "Tesorero", image: "/assets/user_icon.jpg" },
  { name: "Sandra Obando Villalobos", position: "Secretaria", image: "/assets/user_icon.jpg" },
  { name: "Grettel Fonseca Guevara", position: "Vocal 1", image: "/assets/user_icon.jpg" },
  { name: "Dayse Gomez Castillo", position: "Vocal 2", image: "/assets/user_icon.jpg" },
  { name: "Denia Orias Obando", position: "Vocal 3", image: "/assets/user_icon.jpg" },
  { name: "Jose Marchena Cardenas", position: "Fiscal", image: "/assets/user_icon.jpg" }
];

const activities = [
  {
    id: 1,
    name: "Topes",
    description: "Tradicionales topes con participación de jinetes de toda la región.",
    fullDescription: "Los topes son una tradición muy arraigada en Moracia, donde jinetes de toda Guanacaste se reúnen para mostrar sus mejores caballos y habilidades ecuestres.",
    images: ["/assets/tope.jpg", "/assets/tope2.jpg", "/assets/tope3.jpg"]
  },
  {
    id: 2,
    name: "Bailes",
    description: "Bailes populares con música en vivo y DJ.",
    fullDescription: "Los bailes populares son organizados mensualmente en el salón comunal, featuring tanto música tradicional costarricense como música moderna.",
    images: ["/assets/baile.jpg", "/assets/baile2.jpg", "/assets/baile3.jpg"]
  },
  {
    id: 3,
    name: "Partidos",
    description: "Torneos de fútbol y otros deportes comunitarios.",
    fullDescription: "Los torneos deportivos incluyen fútbol masculino y femenino, voleibol y baloncesto.",
    images: ["https://via.placeholder.com/300x200", "https://via.placeholder.com/300x200", "https://via.placeholder.com/300x200"]
  }
];

const faqs = [
  {
    question: "¿Cómo puedo participar en las actividades de la ADI?",
    answer: "Puede participar contactándonos directamente, asistiendo a nuestras reuniones mensuales o siguiendo nuestras redes sociales."
  },
  {
    question: "¿Cuál es el horario de atención de la oficina?",
    answer: "Nuestra oficina atiende de lunes a viernes de 8:00 AM a 4:00 PM. Los sábados atendemos de 8:00 AM a 12:00 PM."
  },
  {
    question: "¿Cómo puedo hacer una donación a la ADI?",
    answer: "Puede hacer donaciones en efectivo en nuestra oficina, por transferencia bancaria, o participando en nuestras actividades."
  }
];

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(initialUsers);
  const [selectedNews, setSelectedNews] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ username: '', password: '', name: '', email: '' });
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

const toggleMenu = (menu) => {
  setOpenMenu(openMenu === menu ? null : menu);
};

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(u => u.username === loginForm.username && u.password === loginForm.password);
    if (user) {
      setCurrentUser(user);
      setShowLogin(false);
      setLoginForm({ username: '', password: '' });
    } else {
      alert('Credenciales inválidas');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage('home');
  };

  const Header = () => (
        <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <img 
              src="/assets/logo-adi-moracia.png" 
              alt="ADI Moracia Logo" 
              className="w-12 h-12 mr-3 rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-green-800">ADI Moracia</h1>
              <p className="text-sm text-gray-600">Nicoya, Guanacaste</p>
            </div>
          </div>

          <nav className="hidden lg:flex space-x-8">
            <button onClick={() => setCurrentPage('about')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">Sobre Nosotros</button>
            <button onClick={() => setCurrentPage('news')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">Noticias</button>
            <button onClick={() => setCurrentPage('services')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">Servicios</button>
            <button onClick={() => setCurrentPage('activities')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">Actividades</button>
            <button onClick={() => setCurrentPage('help')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">Ayuda</button>
            <button onClick={() => setCurrentPage('contact')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">Contacto</button>
          </nav>

          <div className="flex items-center space-x-4">
            {currentUser ? (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage('dashboard')}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  {currentUser.type === 'admin' ? 'Panel Admin' : 'Mi Perfil'}
                </button>
                <button onClick={handleLogout} className="text-gray-600 hover:text-gray-800">
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="hidden lg:flex space-x-2">
                <button
                  onClick={() => setShowLogin(true)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Ingresar
                </button>
              </div>
            )}

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-gray-600">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <button onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }} className="block py-2 text-gray-700 hover:text-green-600 font-medium">Sobre Nosotros</button>
              <button onClick={() => { setCurrentPage('news'); setMobileMenuOpen(false); }} className="block py-2 text-gray-700 hover:text-green-600 font-medium">Noticias</button>
              <button onClick={() => { setCurrentPage('services'); setMobileMenuOpen(false); }} className="block py-2 text-gray-700 hover:text-green-600 font-medium">Servicios</button>
              <button onClick={() => { setCurrentPage('activities'); setMobileMenuOpen(false); }} className="block py-2 text-gray-700 hover:text-green-600 font-medium">Actividades</button>
              <button onClick={() => { setCurrentPage('help'); setMobileMenuOpen(false); }} className="block py-2 text-gray-700 hover:text-green-600 font-medium">Ayuda</button>
              <button onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className="block py-2 text-gray-700 hover:text-green-600 font-medium">Contacto</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );

  const WhatsAppButton = () => (
    <a
      href="https://wa.me/50685502659"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-200 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      title="Contactar por WhatsApp"
    >
       <img 
      src="/assets/whatsapplogo.png" 
      alt="WhatsApp" 
      className="w-6 h-6"
    />
    </a>
  );

  const HomePage = () => (
    <div className="space-y-8">
  <section
    className="relative text-white py-20 bg-center bg-cover"
    style={{ backgroundImage: "url('/assets/Cerro.jpeg')",backgroundPosition: "center bottom -80px"  }}
  >
    {/* Capa de gradiente encima de la imagen */}
    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800 opacity-70"></div>

  <div className="relative container mx-auto px-4 text-center">
    <h1 className="text-5xl font-bold mb-6">
      Asociación de Desarrollo Integral de Moracia
    </h1>
    <p className="text-xl mb-8 max-w-3xl mx-auto">
      Trabajando unidos por el desarrollo y bienestar de nuestra comunidad en Nicoya, Guanacaste
    </p>
  
          <button 
            onClick={() => setCurrentPage('about')}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Conoce más sobre nosotros
          </button>
        </div>
      </section>

<section className="container mx-auto px-4">
  <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-700 flex items-center justify-center text-white px-6">

      {/* Grid de 3 columnas */}
      <div className="grid grid-cols-3 gap-6 w-full items-center">
        
        {/* Cuadro izquierda */}
        <div className="relative">
          <button
            onClick={() => toggleMenu("deportes")}
            className="bg-white/20 backdrop-blur-md rounded-xl p-4 flex flex-col text-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
            <h4 className="text-xl font-semibold">Deportes</h4>
            <p className="text-sm">Campeonato local de fútbol</p>
          </button>

          <AnimatePresence>
            {openMenu === "deportes" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full mt-2 w-48 from-red-900 to-red-100 flex items-center justify-center text-white px-6 rounded-lg shadow-lg overflow-hidden"
              >
                <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Fútbol Masculino</a>
                <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Fútbol Femenino</a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Título central (en la columna del medio) */}
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="text-3xl font-bold mb-2">Próximas Actividades</h3>
          <p className="text-lg">MORACIA ES MORACIA!</p>
        </div>

        {/* Cuadro derecha */}

        
        <div className="relative">
          <button
            onClick={() => toggleMenu("cultural")} 
            
            className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
          <h4 className="text-xl font-semibold">Cultural</h4>
          <p className="text-sm">Exposición de arte y música</p>
          </button>
           <AnimatePresence>
            {openMenu === "cultural" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full mt-1 w-80 from-red-900 to-red-100 flex items-center justify-center text-white px-6 rounded-lg shadow-lg overflow-hidden"
              >
                <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Grupo de Baile Latino</a>
                <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Banda Comunal</a>
                <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Otras actividades</a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  </div>

</section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Noticias Recientes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.slice(0, 3).map(news => (
            <div key={news.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-2">{news.title}</h3>
                <p className="text-gray-600 mb-4">{news.summary}</p>
                <button
                  onClick={() => {
                    setSelectedNews(news);
                    setCurrentPage('news-detail');
                  }}
                  className="text-green-600 hover:text-green-800 font-semibold"
                >
                  Leer más →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Síguenos en Facebook</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
            <div className="text-center">
              <Facebook className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Mantente al día con nuestras publicaciones más recientes</p>
              <a
                href="https://facebook.com/ADIMoraciaNicoya"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Visitar página de Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Sobre Nosotros</h1>
        <p className="text-xl text-gray-600">Conoce nuestra historia, misión y valores</p>
      </div>

      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-green-800 mb-6">¿Quiénes Somos?</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          La Asociación de Desarrollo Integral de Moracia de Nicoya es una organización comunitaria sin fines de lucro 
          que trabaja por el desarrollo integral de nuestra comunidad. Desde nuestra fundación, hemos estado comprometidos 
          con el mejoramiento de la calidad de vida de los habitantes de Moracia y sus alrededores.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Nuestro trabajo abarca múltiples áreas incluyendo infraestructura, educación, cultura, deporte y desarrollo 
          económico, siempre con la participación activa de la comunidad y enfocados en soluciones sostenibles.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-green-50 p-6 rounded-lg">
          <Target className="w-12 h-12 text-green-600 mb-4" />
          <h3 className="text-2xl font-bold text-green-800 mb-4">Nuestra Misión</h3>
          <p className="text-gray-700">
            Promover el desarrollo integral y sostenible de la comunidad de Moracia, mediante la gestión de proyectos 
            que mejoren la calidad de vida de sus habitantes y fortalezcan el tejido social.
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg">
          <Eye className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Nuestra Visión</h3>
          <p className="text-gray-700">
            Ser reconocidos como una organización líder en el desarrollo comunitario, que inspire a otras comunidades 
            y sea modelo de participación ciudadana y gestión transparente.
          </p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <Heart className="w-12 h-12 text-yellow-600 mb-4" />
          <h3 className="text-2xl font-bold text-yellow-800 mb-4">Nuestros Valores</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• Transparencia</li>
            <li>• Participación comunitaria</li>
            <li>• Solidaridad</li>
            <li>• Compromiso social</li>
            <li>• Desarrollo sostenible</li>
          </ul>
        </div>
      </div>

      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-green-800 mb-8 flex items-center">
          <Users className="w-8 h-8 mr-3" />
          Junta Directiva
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {boardMembers.map((member, index) => (
            <div key={index} className="text-center bg-gray-50 p-6 rounded-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg text-gray-800">{member.name}</h3>
              <p className="text-green-600 font-semibold">{member.position}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const NewsPage = () => (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Noticias</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {newsData.map(news => (
          <article key={news.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative">
              <img src={news.image} alt={news.title} className="w-full h-64 object-cover" />
              <div className="absolute top-4 right-4 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                ADI
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-bold text-green-800">{news.title}</h2>
                <span className="text-sm text-gray-500">{new Date(news.date).toLocaleDateString('es-ES')}</span>
              </div>
              <p className="text-gray-600 mb-4">{news.summary}</p>
              <button
                onClick={() => {
                  setSelectedNews(news);
                  setCurrentPage('news-detail');
                }}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
              >
                Leer completa <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  const LoginModal = () => {
    if (!showLogin) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Iniciar Sesión</h2>
            <button onClick={() => setShowLogin(false)} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Usuario</label>
              <input
                type="text"
                required
                value={loginForm.username}
                onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="Ingrese su usuario"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
              <input
                type="password"
                required
                value={loginForm.password}
                onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="Ingrese su contraseña"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Ingresar
            </button>
          </form>
          <div className="mt-4 text-center">
            <div className="text-xs text-gray-500">
              <p>Usuarios de prueba:</p>
              <p>Admin: admin / admin123</p>
              <p>Usuario: usuario1 / user123</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Footer = () => (
   <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/assets/logo-adi-moracia.png" 
                alt="ADI Moracia Logo" 
                className="w-10 h-10 mr-3 rounded-full"
              />
              <div>
                <h3 className="font-bold">ADI Moracia</h3>
                <p className="text-sm text-gray-300">Nicoya, Guanacaste</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Trabajando por el desarrollo integral de nuestra comunidad desde 1978.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setCurrentPage('about')} className="text-gray-300 hover:text-white">Sobre Nosotros</button></li>
              <li><button onClick={() => setCurrentPage('news')} className="text-gray-300 hover:text-white">Noticias</button></li>
              <li><button onClick={() => setCurrentPage('activities')} className="text-gray-300 hover:text-white">Actividades</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="text-gray-300 hover:text-white">Contacto</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Moracia, Nicoya, Guanacaste</p>
              <p className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +506 8550 2659</p>
              <p className="flex items-center"><Mail className="w-4 h-4 mr-2" /> adimoracia@hotmail.com</p>
              <a href="https://facebook.com/ADIMoraciaNicoya" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white">
                <Facebook className="w-4 h-4 mr-2" /> Facebook
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            Copyright © 2025 Asociación de Desarrollo Integral de Moracia de Nicoya. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'news': return <NewsPage />;
      case 'services': return <ServicesPage />;
      case 'activities': return <ActivitiesPage onSelectActivity={setSelectedActivity} onNavigate={setCurrentPage} />;
      case 'activity-detail': return <ActivityDetailPage selectedActivity={selectedActivity} currentUser={currentUser} onNavigate={setCurrentPage} />;
      case 'help': return <HelpPage onNavigate={setCurrentPage} />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="min-h-screen">
        {renderCurrentPage()}
      </main>
      <Footer />
      <WhatsAppButton />
      <LoginModal />
    </div>
  );
};

export default App;