export default function Footer() {
    return (
        <footer className="bg-gradient-to-t from-gray-900 to-transparent border rounded-t-3xl border-gray-800/40 text-white py-8 sm:py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <div className="text-xl sm:text-2xl font-bold mb-4">Huntly</div>
                        <p className="text-gray-400 text-sm sm:text-base">Discovery engine para leads de qualidade</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-sm sm:text-base">Produto</h4>
                        <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                            <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-sm sm:text-base">Empresa</h4>
                        <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                            <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-sm sm:text-base">Suporte</h4>
                        <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                            <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
                    <p className="text-sm sm:text-base">© 2024 Huntly. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}