import MailIcon from './Icons/Mail'
import PhoneIcon from './Icons/PhoneIcon';

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="bg-black">
        <div className="flex items-center text-white max-w-6xl mx-auto py-1 px-6 gap-x-2">
          <MailIcon className="size-4" />
          <p>
            leandromartinez.dev@gmail.com
          </p>
          <span>|</span>
          <PhoneIcon className="size-4" />
          <p>
            095220063
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/">
          <h1 className="text-xl font-bold text-blue-600">Leandro Martínez</h1>
        </a>
        <nav className="space-x-4 hidden md:block">
          <a href="#inicio" className="text-gray-700 hover:text-blue-600">Inicio</a>
          <a href="#servicios" className="text-gray-700 hover:text-blue-600">Servicios</a>
          <a href="#portfolio" className="text-gray-700 hover:text-blue-600">Portfolio</a>
          <a href="#contacto" className="text-gray-700 hover:text-blue-600">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
