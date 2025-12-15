import { Leaf, Heart, Recycle, GraduationCap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "100% Natural",
      description: (
  <span style={{ fontFamily: "Nunito, sans-serif" }}>
    Apenas suco puro de laranja, sem conservantes ou açúcares adicionados
  </span>
)
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Impacto direto",
      description: (
  <span style={{ fontFamily: "Nunito, sans-serif" }}>
 Sua assinatura mantém a escola gratuita para a comunidade local
  </span>
      ) 
    },
    {
      icon: <Recycle className="w-8 h-8 text-blue-500" />,
      title: "Sustentabilidade",
      description: "Material de descarte é reutilizado para ração animal e adubos"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-500" />,
      title: "Educação gratuita",
      description: "Mais de 200 crianças e adolescentes transformados pela educação"
    }
  ];

  return (
    <section id="second-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Uma história de propósito e qualidade
          </h2>

          <div className="max-w-4xl mx-auto">
           <p
  className="text-lg text-gray-600 leading-relaxed"
  style={{ fontFamily: "Nunito, sans-serif" }}
>
  Lançado com paixão em dezembro de 2022, o Suco Maria Peregrina oferece saúde e qualidade com impacto social direto. 
  Produzido com carinho na Fazenda Nossa Senhora Aparecida, em Paraíso-SP, cada assinatura sustenta integralmente a 
  Escola Maria Peregrina e transforma diariamente a vida de mais de 200 crianças e adolescentes através da educação gratuita.
</p>

          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-lg transition-all duration-300 hover-scale"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-100 to-green-100 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              "Construir a cidade de Deus na cidade dos homens"
            </h3>

           <p className="text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: "Nunito, sans-serif" }}>
  Nosso suco é mais que um produto - é uma missão. 100% laranja, produzido por pequenos cooperados 
  que respeitam todas as exigências sanitárias. Um produto verdadeiro, sem pegadinhas no rótulo, 
  literalmente do campo direto para sua mesa.
</p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
