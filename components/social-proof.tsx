import { Card, CardContent } from "@/components/ui/card";

export function SocialProof() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-16 text-white">Empresas que Confiam no Huntly</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {['TechCorp', 'StartupXYZ', 'SalesForce', 'MarketPro'].map((company) => (
            <Card key={company} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 transition-all">
              <CardContent className="p-6">
                <div className="text-xl font-semibold text-white/60">{company}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
