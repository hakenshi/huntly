import { PropsWithChildren } from "react";

export default function UserLayout({children}:PropsWithChildren) {
  return (
    <div className="grid grid-cols-[0.12fr_1fr] min-h-screen bg-gradient-to-tl ">
        <aside className="border-r border-r-gray-800/80 grid grid-rows-[0.1fr_0.8fr_0.1fr]">
            <div className="border-b border-b-gray-800/80">
                
                <h1 className="text-xl font-bold text-white m-4">Huntly</h1>
            </div>
            <nav>
            </nav>
            <div className="border-t border-t-gray-800/80"></div>
        </aside>
            {children}
    </div>
  )
}