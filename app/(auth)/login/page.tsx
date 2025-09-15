import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <main className="grid grid-cols-[0.8fr_0.22fr] min-h-screen">
        <section className="border-r border-zinc-900/80"></section>
        <section className="bg-black/30 flex flex-col items-center justify-center backdrop-blur-md border-zinc-900/80-">
            <div className="p-5 text-center">
                <h2 className="text-2xl">Bem-vindo!</h2>
                <p className="text-sm text-white/80">Pronto para impulsionar seu trabalho?</p>
            </div>
            <form className="space-y-4 w-3/4">
                <Input />
                <Input />
            </form>
        </section>
    </main>
)
}