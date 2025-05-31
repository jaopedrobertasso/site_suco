
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-orange-50 to-green-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Suco natural, <span className="text-orange-500">propósito real</span>: transforme vidas enquanto cuida da sua saúde!
            </h1>
            <p className="text-xl text-gray-600">
              100% laranja pura, integral e sem fins lucrativos. Cada gole educa o futuro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToForm}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-full"
              >
                Assine Agora
              </Button>
              <Button 
                variant="outline" 
                className="border-green-500 text-green-600 hover:bg-green-50 px-8 py-3 text-lg rounded-full"
              >
                Saiba Mais
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <img 
              src="/lovable-uploads/8c90be18-c408-4e27-97a4-42ab0d86d06f.png" 
              alt="Escola Maria Peregrina com alunos"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <p className="text-sm font-semibold text-gray-800">+200 crianças</p>
              <p className="text-xs text-gray-600">Educadas gratuitamente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
