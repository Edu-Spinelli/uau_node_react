'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Package, Plus, Search, Upload } from 'lucide-react'

// Simula dados de produtos em estoque
const initialProducts = [
  { id: '1', name: 'Natura Essencial', quantity: 45, price: 89.90, image: '/placeholder.svg?height=100&width=100' },
  { id: '2', name: 'Natura Humor', quantity: 32, price: 75.50, image: '/placeholder.svg?height=100&width=100' },
  { id: '3', name: 'Natura Kaiak', quantity: 28, price: 99.00, image: '/placeholder.svg?height=100&width=100' },
  { id: '4', name: 'Natura Luna', quantity: 19, price: 120.00, image: '/placeholder.svg?height=100&width=100' },
]

export default function EstoquePage() {
  const [products, setProducts] = useState(initialProducts)
  const [searchTerm, setSearchTerm] = useState('')
  const [newProduct, setNewProduct] = useState({ name: '', quantity: '', price: '', image: null as File | null })
  const fileInputRef = useRef<HTMLInputElement>(null)

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault()
    const productToAdd = {
      id: (products.length + 1).toString(),
      name: newProduct.name,
      quantity: parseInt(newProduct.quantity),
      price: parseFloat(newProduct.price),
      image: newProduct.image ? URL.createObjectURL(newProduct.image) : '/placeholder.svg?height=100&width=100'
    }
    setProducts([...products, productToAdd])
    setNewProduct({ name: '', quantity: '', price: '', image: null })

  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewProduct({ ...newProduct, image: e.target.files[0] })
    }
  }

  return (
    <Layout>
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-purple-800">Estoque de Produtos</h1>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar Produto
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Adicionar Novo Produto</DialogTitle>
                  <DialogDescription>
                    Preencha os detalhes do novo produto aqui. Clique em salvar quando terminar.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAddProduct}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Nome
                      </Label>
                      <Input
                        id="name"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                        className="col-span-3"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="quantity" className="text-right">
                        Quantidade
                      </Label>
                      <Input
                        id="quantity"
                        type="number"
                        value={newProduct.quantity}
                        onChange={(e) => setNewProduct({...newProduct, quantity: e.target.value})}
                        className="col-span-3"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="price" className="text-right">
                        Preço Pago
                      </Label>
                      <Input
                        id="price"
                        type="number"
                        step="0.01"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                        className="col-span-3"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="image" className="text-right">
                        Imagem
                      </Label>
                      <div className="col-span-3">
                        <Input
                          id="image"
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                          accept="image/*"
                          ref={fileInputRef}
                        />
                        <Button type="button" variant="outline" onClick={() => fileInputRef.current?.click()}>
                          <Upload className="w-4 h-4 mr-2" />
                          Escolher Imagem
                        </Button>
                        {newProduct.image && <span className="ml-2 text-sm">{newProduct.image.name}</span>}
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Salvar Produto</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardContent className="p-3">
                  <h3 className="font-semibold text-sm mb-1 truncate">{product.name}</h3>
                  <p className="text-xs text-gray-600">Qtd: {product.quantity}</p>
                  <p className="text-xs text-gray-600">Preço: R$ {product.price.toFixed(2)}</p>
                </CardContent>
                <CardFooter className="p-2">
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    <Package className="w-3 h-3 mr-1" />
                    Gerenciar
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}