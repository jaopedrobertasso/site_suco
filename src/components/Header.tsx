import { Instagram } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-16 h-16 flex items-center justify-center">
            <img
              src="/sucoperfil.jpg"
              alt="Suco Maria Peregrina Logo"
              className="w-16 h-16 object-contain"
            />
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-800">
              Suco Maria Peregrina
            </h1>
            <p
              className="text-xs text-gray-600"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              100% Natural • Sem Fins Lucrativos
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
