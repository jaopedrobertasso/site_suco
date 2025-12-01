import { Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#203E5C" }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Coluna 1 */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
             <div className="w-14 h-14 flex items-center justify-center">
  <img 
    src="/public/capa_suco.png"
    alt="Suco Maria Peregrina Logo"
    className="w-full h-full object-contain"
  />
</div>

              <div>
                <h3 className="text-white font-bold">Suco Maria Peregrina</h3>
                <p className="text-sm text-gray-400">100% Natural • Sem Fins Lucrativos</p>
              </div>
            </div>

            <p className="text-gray-300">
              Transformando vidas através da educação, um suco de cada vez.
            </p>
          </div>

          {/* Coluna 2 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <div className="space-y-2">
              <p className="text-gray-300">WhatsApp: (17) 98811-7656</p>
              <p className="text-gray-300">Paraíso - SP</p>

              <a 
                href="https://instagram.com/sucomariaperegrina" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-pink-300 transition-colors"
                style={{ color: "#F9BE9E" }}
              >
                <Instagram size={16} className="mr-2" />
                @sucomariaperegrina
              </a>
            </div>
          </div>

          {/* Coluna 3 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Transparência</h4>

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

        {/* Rodapé final */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Associação Missões Maria Peregrina. Todos os direitos reservados.
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
