import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "R$ 99",
    description: "Para pequenas equipes",
    features: ["100 leads/mês", "Integração básica", "Suporte por email"],
    popular: false,
  },
  {
    name: "Professional",
    price: "R$ 299",
    description: "Para equipes em crescimento",
    features: ["500 leads/mês", "Todas as integrações", "Suporte prioritário", "Analytics avançado"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Customizado",
    description: "Para grandes empresas",
    features: ["Leads ilimitados", "API personalizada", "Suporte dedicado", "Treinamento incluso"],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-40 text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Planos Simples e Transparentes</h2>
          <p className="text-xl text-gray-300">Escolha o plano ideal para o tamanho da sua equipe</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative grid grid-rows-3 h-96 bg-gradient-to-tl from-gray-900/40 to-transparent border border-gray-800/40 hover:scale-105 transition-transform`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500/50 border-orange-500 text-white">
                  Mais Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-white">{plan.name}</CardTitle>
                <CardDescription className="text-gray-300">{plan.description}</CardDescription>
                <div className="text-3xl font-bold text-white">
                  {plan.price}
                  {plan.price !== "Customizado" && <span className="text-lg text-gray-300">/mês</span>}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-10">
                <Button 
                  className="w-full"
                >
                  {plan.name === "Enterprise" ? "Falar com Vendas" : "Começar Grátis"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
