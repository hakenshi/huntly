export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="px-6 py-4 bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="text-2xl font-bold text-indigo-600">Huntly</div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Recursos</a>
            <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Preços</a>
            <a href="#faq" className="text-gray-600 hover:text-indigo-600 transition-colors">FAQ</a>
          </div>
          <div className="space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:text-indigo-600 transition-colors">Login</button>
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Começar Grátis
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Encontre Leads de <span className="text-indigo-600">Qualidade</span> Automaticamente
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Nossa discovery engine busca e qualifica leads automaticamente, 
            economizando horas de pesquisa manual para sua equipe de marketing.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="px-8 py-4 bg-indigo-600 text-white text-lg rounded-lg hover:bg-indigo-700 transition-colors">
              Começar Teste Grátis
            </button>
            <button className="px-8 py-4 border border-gray-300 text-gray-700 text-lg rounded-lg hover:bg-gray-50 transition-colors">
              Ver Demo
            </button>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-2xl">🎥 Demo Video</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Três passos simples para transformar sua geração de leads
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-indigo-200 transition-colors">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Defina Critérios</h3>
              <p className="text-gray-600">
                Configure os parâmetros do seu cliente ideal: setor, tamanho da empresa, localização
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-indigo-200 transition-colors">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Discovery Automático</h3>
              <p className="text-gray-600">
                Nossa IA busca e qualifica leads em tempo real baseado nos seus critérios
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-indigo-200 transition-colors">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Receba Leads Qualificados</h3>
              <p className="text-gray-600">
                Leads com score de qualidade direto no seu CRM ou dashboard
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Empresas que Confiam no Huntly
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {['TechCorp', 'StartupXYZ', 'SalesForce', 'MarketPro'].map((company) => (
              <div key={company} className="bg-white p-6 rounded-lg">
                <div className="text-xl font-semibold text-gray-400">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planos Simples e Transparentes
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o plano ideal para o tamanho da sua equipe
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-2">Starter</h3>
              <div className="text-3xl font-bold mb-4">R$ 99<span className="text-lg text-gray-500">/mês</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 100 leads/mês</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Integração básica</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Suporte por email</li>
              </ul>
              <button className="w-full py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
                Começar Grátis
              </button>
            </div>

            <div className="bg-indigo-600 text-white rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
                Mais Popular
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional</h3>
              <div className="text-3xl font-bold mb-4">R$ 299<span className="text-lg opacity-80">/mês</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> 500 leads/mês</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Todas as integrações</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Suporte prioritário</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Analytics avançado</li>
              </ul>
              <button className="w-full py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors">
                Começar Grátis
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <div className="text-3xl font-bold mb-4">Customizado</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Leads ilimitados</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> API personalizada</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Suporte dedicado</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Treinamento incluso</li>
              </ul>
              <button className="w-full py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
                Falar com Vendas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Como funciona o período de teste gratuito?",
                a: "Você tem 14 dias para testar todas as funcionalidades sem compromisso. Não cobramos cartão de crédito."
              },
              {
                q: "Posso integrar com meu CRM atual?",
                a: "Sim! Temos integrações nativas com Salesforce, HubSpot, Pipedrive e mais de 20 outras plataformas."
              },
              {
                q: "Como vocês garantem a qualidade dos leads?",
                a: "Usamos IA e machine learning para analisar múltiplos pontos de dados e atribuir scores de qualidade precisos."
              },
              {
                q: "Posso cancelar a qualquer momento?",
                a: "Sim, você pode cancelar sua assinatura a qualquer momento sem taxas de cancelamento."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-6 py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Acelerar suas Vendas?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a centenas de empresas que já transformaram sua geração de leads
          </p>
          <button className="px-8 py-4 bg-white text-indigo-600 text-lg rounded-lg hover:bg-gray-100 transition-colors">
            Começar Teste Grátis Agora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">Huntly</div>
              <p className="text-gray-400">
                Discovery engine para leads de qualidade
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Huntly. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
