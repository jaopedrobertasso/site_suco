
import { Instagram } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 flex items-center justify-center">
            <img 
              src="/lovable-uploads/ae549042-b999-4da5-8ec9-b29e8bf8a7ce.png" 
              alt="Suco Maria Peregrina Logo"
              className="w-10 h-10 object-contain"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Suco Maria Peregrina</h1>
            <p className="text-xs text-gray-600">100% Natural • Sem Fins Lucrativos</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <a 
            href="https://instagram.com/sucomariaperegrina" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors"
          >
            <Instagram size={20} />
            <span className="hidden md:inline">@sucomariaperegrina</span>
          </a>
          <a 
            href="https://wa.me/5517988117656" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
