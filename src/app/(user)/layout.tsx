import HuntlyLogo from "@/src/components/huntly-logo";
import Icon from "@/src/components/icon";
import { BarChart, Building, HomeIcon, icons, SearchIcon, Settings, Users } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";

const navigation = [
  {
    url: "/dashboard",
    icon: <HomeIcon />,
    name: "Dashboard"
  },
  {
    url: "/buscar-leads",
    icon: <SearchIcon />,
    name: "Buscar Leads"
  },
  {
    url: "/meus-leads",
    icon: <Users />,
    name: "Meus Leads"
  },
  {
    url: "/analytics",
    icon: <BarChart />,
    name: "Analytics"
  },
  {
    url: "/campanhas",
    icon: <Building />,
    name: "Campanhas"
  },
  {
    url: "/configuracoes",
    icon: <Settings />,
    name: "Configurações"
  }
]

export default function UserLayout({children}:PropsWithChildren) {
  return (
    <div className="grid md:grid-cols-[0.12fr_1fr] min-h-screen bg-gradient-to-tl ">
        <aside className="hidden border-r border-r-gray-800/80 md:grid md:grid-rows-[0.1fr_0.8fr_0.1fr]">
            <div className="border-b border-b-gray-800/80 flex items-center justify-center">
                <HuntlyLogo href="" />
            </div>
            <nav className="mt-30">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link href={item.url} className="inline-flex w-full items-center gap-3 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors px-4 py-3">
                    {item.icon}
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                </div>
              ))}
            </nav>
            <div className="border-t border-t-gray-800/80 inline-flex items-center justify-start gap-2 p-2">
                <Icon />
                <p>User</p>
            </div>
        </aside>
            {children}
    </div>
  )
}