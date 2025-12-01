
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
              Suco natural, <span style= {{ color : "#E08042" }}>propósito real</span>: transforme vidas enquanto cuida da sua saúde!
            </h1>
            <p className="text-xl text-gray-600">
              100% laranja pura, integral e sem fins lucrativos. Cada gole educa o futuro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
  onClick={scrollToForm}
  className="bg-[#E08042] hover:bg-[#cc6f37] text-white px-8 py-3 text-lg rounded-full"
>
  Assine Agora
</Button>

             <Button 
  variant="outline"
  onClick={() => {
    const el = document.getElementById("second-section");
    el?.scrollIntoView({ behavior: "smooth" });
  }}
  className="
    bg-transparent
    border-green-500 
    text-green-600 
    hover:bg-[#E3FCE1] 
    hover:text-green-600 
    px-8 py-3 text-lg rounded-full
  "
>
  Saiba Mais
</Button>


            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <img 
              src="/lovable-uploads/sucoheader.jpeg" 
              alt="Escola Maria Peregrina com alunos"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;
