
import { Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">MP</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Suco Maria Peregrina</h3>
                <p className="text-sm text-gray-400">100% Natural • Sem Fins Lucrativos</p>
              </div>
            </div>
            <p className="text-gray-300">
              Transformando vidas através da educação, um suco de cada vez.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2">
              <p className="text-gray-300">WhatsApp: (17) 98811-7656</p>
              <p className="text-gray-300">Paraíso - SP</p>
              <a 
                href="https://instagram.com/sucomariaperegrina" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-pink-400 hover:text-pink-300 transition-colors"
              >
                <Instagram size={16} className="mr-2" />
                @sucomariaperegrina
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Transparência</h4>
            <a 
              href="https://mariaperegrina.org.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-4"
            >
              <ExternalLink size={16} className="mr-2" />
              mariaperegrina.org.br
            </a>
            <p className="text-gray-300 text-sm">
              Transparência e compromisso com a educação que transforma gerações.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Associação Missões Maria Peregrina. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            "Construir a cidade de Deus na cidade dos homens"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
