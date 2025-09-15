import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o período de teste gratuito?",
    answer: "Você tem 14 dias para testar todas as funcionalidades sem compromisso. Não cobramos cartão de crédito."
  },
  {
    question: "Posso integrar com meu CRM atual?",
    answer: "Sim! Temos integrações nativas com Salesforce, HubSpot, Pipedrive e mais de 20 outras plataformas."
  },
  {
    question: "Como vocês garantem a qualidade dos leads?",
    answer: "Usamos IA e machine learning para analisar múltiplos pontos de dados e atribuir scores de qualidade precisos."
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim, você pode cancelar sua assinatura a qualquer momento sem taxas de cancelamento."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="px-6 py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Perguntas Frequentes</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-gray-900 border border-gray-700 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-white hover:text-gray-300">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
