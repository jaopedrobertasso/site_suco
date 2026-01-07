import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const UTM_ID = 'da498f46-f18b-4214-84d5-fa8d4c89a764';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.mariaperegrina.org/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          utm_id: UTM_ID,
          name: formData.name,
          email: formData.email,
          number: formData.phone,
          comment: '',
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar lead');
      }

      toast({
        title: 'Obrigado pelo seu interesse!',
        description:
          'Em breve um representante das Escolas Maria Peregrina entrará em contato com você.',
      });

      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      toast({
        title: 'Erro ao enviar formulário',
        description: 'Tente novamente em instantes.',
        variant: 'destructive',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Transforme vidas começando hoje
            </h2>
            <p className="text-lg text-gray-600" style={{ fontFamily: "Nunito, sans-serif" }}>
              Coloque seus dados e um representante das Escolas Maria Peregrina entrará em contato
              brevemente para concretizar sua assinatura.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome completo
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Celular (WhatsApp)
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(17) 99999-9999"
                />
              </div>

              <Button
                type="submit"
                className="w-full text-white py-4 text-lg rounded-lg font-semibold hover:opacity-90"
                style={{ backgroundColor: '#BDB42F' }}
              >
                Quero Assinar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;