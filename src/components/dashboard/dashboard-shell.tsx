import { PropsWithChildren } from "react";
import { Button } from "../ui/button";
import { DownloadIcon, PlusIcon } from "lucide-react";

interface Props extends PropsWithChildren {
    pageName: string
}

export default function DashboardShell({ children, pageName }: Props) {
    return (
        <div className="grid grid-rows-[0.1fr_0.9fr] ">
            <header className="border-b border-b-gray-800/80 p-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">{pageName}</h2>
                <nav className="flex items-center gap-2">
                    <Button variant={"ghost"}>
                        <DownloadIcon /> 
                        <span className="md:inline hidden">Exportar</span>
                    </Button>
                    <Button>
                        <PlusIcon /> 
                        <span className="md:inline hidden">Nova Busca</span>
                    </Button>
                </nav>
            </header>
            <main className="p-4">
                {children}
            </main>
        </div>
    )
}