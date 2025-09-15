import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br bg-zinc-950/50 flex items-center justify-center p-4">
            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.1),transparent_50%)]" /> */}

            <div className="relative w-full max-w-md">
                {/* <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Huntly</h1>
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-500 mx-auto rounded-full" />
                </div> */}

                <Card className="bg-gradient-to-tl from-gray-900/40 to-transparent border border-gray-800/40">
                    <CardHeader className="text-center space-y-2">
                        <CardTitle className="text-2xl font-bold text-white">Bem-vindo!</CardTitle>
                        <CardDescription className="text-zinc-300 text-base">
                            Pronto para impulsionar seu trabalho?
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <Label className="text-zinc-200 font-medium">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="seu@email.com"
                                    className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-orange-500 focus:ring-orange-500/20 h-12"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label className="text-zinc-200 font-medium">
                                    Senha
                                </Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-orange-500 focus:ring-orange-500/20 h-12"
                                />
                            </div>
                            <Button
                                type="submit"
                                variant={"gradient"}
                                className="w-full"
                            >
                                Entrar
                            </Button>
                            <div className="flex justify-center">
                                <a href="#" className="text-sm text-orange-400/80 hover:text-orange-300 transition-colors">
                                    Esqueceu a senha?
                                </a>
                            </div>
                        </form>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-zinc-700" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-zinc-900 px-4 text-zinc-400">ou</span>
                            </div>
                        </div>

                        <div className="text-center">
                            <span className="text-zinc-400">Não tem uma conta? </span>
                            <Link href="/register" className="text-orange-400 hover:text-orange-300 font-medium transition-colors">
                                Criar conta
                            </Link>
                        </div>
                    </CardContent>
                </Card>

                <p className="text-center text-zinc-500 text-sm mt-8">
                    Ao continuar, você concorda com nossos Termos de Serviço
                </p>
            </div>
        </div>
    )
}