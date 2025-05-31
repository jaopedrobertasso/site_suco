
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Plans = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Escolha seu plano de assinatura
          </h2>
          <p className="text-lg text-gray-600">
            Receba suco fresco em casa toda semana e transforme vidas através da educação
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plano Start */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover-scale transition-all duration-300">
            <div className="relative">
              <img 
                src="/lovable-uploads/a427abfc-6258-4c3e-8d69-fcd2159e06a5.png" 
                alt="Plano Start - 1 litro semanal"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Plano Start
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Plano Start</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-orange-500">R$ 48</span>
                <span className="text-gray-600">/semana</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>1 litro de suco fresco por semana</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>100% natural, sem conservantes</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Entrega em domicílio</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Apoio direto à educação</span>
                </li>
              </ul>
              <Button 
                onClick={scrollToForm}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full"
              >
                Assinar Plano Start
              </Button>
            </div>
          </div>

          {/* Plano Top */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover-scale transition-all duration-300 relative">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-bl-lg text-sm font-semibold z-10">
              Mais Popular
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/a02f6460-a83b-4747-8219-3e9d0c714ea5.png" 
                alt="Plano Top - 2 litros semanais"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Plano Top
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Plano Top</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-orange-500">R$ 88</span>
                <span className="text-gray-600">/semana</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>2 litros de suco fresco por semana</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>100% natural, sem conservantes</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Entrega em domicílio</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Maior impacto educacional</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Economia para a família</span>
                </li>
              </ul>
              <Button 
                onClick={scrollToForm}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-full"
              >
                Assinar Plano Top
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            <strong>Importante:</strong> Validade de 10 dias • Manter refrigerado • Consumir em até 24h após aberto
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;
