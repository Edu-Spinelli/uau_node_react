'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplets, Lock } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria a lógica de autenticação
    console.log('Login attempt', { email, password })
    // Após autenticação bem-sucedida, redirecione para o dashboard
    //router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 to-purple-400">
      <Card className="w-[500px] shadow-2xl">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <Droplets className="h-12 w-12 text-purple-600" />
          </div>
          <CardTitle className="text-2xl text-center font-bold">Uau Modas</CardTitle>
          <CardDescription className="text-center">
            Entre para gerenciar sua loja de perfumes Natura
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input 
                id="password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-purple-600 hover:bg-purple-700" type="submit">
              <Lock className="mr-2 h-4 w-4" /> Entrar
            </Button>
          </CardFooter>
        </form>
      </Card>
      <div className="absolute bottom-4 left-4">
        <Image 
          src="/natura.svg"
          alt="Natura Logo" 
          width={50} 
          height={50}
          className="opacity-50"
        />
      </div>
    </div>
  )
}