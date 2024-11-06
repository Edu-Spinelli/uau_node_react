import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ShoppingBag, Package, Users, BarChart } from 'lucide-react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-purple-800 text-white">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6" />
            <span className="text-2xl font-bold">UAU Modas</span>
          </Link>
          <nav className="flex items-center space-x-4 text-sm font-medium">
            <Link href="/estoque">
              <Button variant="ghost" className="text-white hover:text-purple-200">
                <Package className="w-4 h-4 mr-2" />
                Estoque
              </Button>
            </Link>
            <Link href="/vendas">
              <Button variant="ghost" className="text-white hover:text-purple-200">
                <BarChart className="w-4 h-4 mr-2" />
                Vendas
              </Button>
            </Link>
            <Link href="/clientes">
              <Button variant="ghost" className="text-white hover:text-purple-200">
                <Users className="w-4 h-4 mr-2" />
                Clientes
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 bg-purple-100">
        {children}
      </main>
      <footer className="w-full py-4 border-t bg-purple-800 text-white">
        <div className="container text-center text-sm">
          © 2023 UAU Modas. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}