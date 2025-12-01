
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "São José do Rio Preto",
      text: "O suco é delicioso e saber que estou ajudando crianças a terem uma educação de qualidade me emociona muito. É um produto que vale cada centavo!",
      rating: 5
    },
    {
      name: "João Santos",
      location: "Rio Claro",
      text: "Qualidade excepcional! Minha família toda adora e eu fico feliz sabendo que estamos contribuindo para a educação. Recomendo demais!",
      rating: 5
    },
    {
      name: "Ana Paula",
      location: "Paraíso",
      text: "Suco natural de verdade, sem mentiras no rótulo. E ainda contribuo para uma causa linda. Fazer o bem realmente faz bem!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            O que nossos assinantes dizem
          </h2>
          <p className="text-lg text-gray-600">
            Histórias reais de quem escolheu fazer a diferença
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-orange-50 to-green-50 p-8 rounded-2xl shadow-lg hover-scale transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

      <div className="text-center mt-12">
  <div
    className="text-white p-8 rounded-2xl inline-block"
    style={{ backgroundColor: '#BDB42F' }}
  >
    <h3 className="text-2xl font-bold mb-2">Fazer o bem faz bem!</h3>
    <p className="text-lg">Junte-se a centenas de famílias que já transformam vidas</p>
  </div>
</div>

      </div>
    </section>
  );
};

export default Testimonials;
