'use client'

import Layout from "../components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Package, DollarSign, Users, AlertCircle, ArrowUpRight } from 'lucide-react';

const salesData = [
  { name: 'Jan', vendas: 4000 },
  { name: 'Fev', vendas: 3000 },
  { name: 'Mar', vendas: 5000 },
  { name: 'Abr', vendas: 4500 },
  { name: 'Mai', vendas: 6000 },
  { name: 'Jun', vendas: 5500 },
];

export default function Dashboard() {
  return (
    <Layout>
      <main className="flex-1 container py-6 px-4 max-w-full bg-purple-100">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-purple-400 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-medium">Estoque Total</CardTitle>
              <Package className="h-4 w-4 text-purple-100" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1,234</div>
              <p className="text-xs text-purple-100">23 produtos com estoque baixo</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-500 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-medium">Vendas do Mês</CardTitle>
              <DollarSign className="h-4 w-4 text-purple-100" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">R$ 45.231,89</div>
              <p className="text-xs text-purple-100">
                <ArrowUpRight className="h-4 w-4 inline mr-1" />
                +20.1% em relação ao mês anterior
              </p>
            </CardContent>
          </Card>
          <Card className="bg-purple-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-medium">Clientes Ativos</CardTitle>
              <Users className="h-4 w-4 text-purple-100" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">573</div>
              <p className="text-xs text-purple-100">+48 novos clientes este mês</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-700 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-medium">Clientes Devedores</CardTitle>
              <AlertCircle className="h-4 w-4 text-purple-100" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12</div>
              <p className="text-xs text-purple-100">Total devido: R$ 3.450,00</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Vendas Mensais</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="vendas" fill="#9f7aea" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Controle de Estoque</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Input placeholder="Buscar produto..." />
                <Table className="text-sm">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Produto</TableHead>
                      <TableHead>Quantidade</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Natura Essencial</TableCell>
                      <TableCell>45</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Natura Humor</TableCell>
                      <TableCell>32</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Natura Kaiak</TableCell>
                      <TableCell>28</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Natura Luna</TableCell>
                      <TableCell>19</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Últimos Pagamentos</CardTitle>
            </CardHeader>
            <CardContent>
              <Table className="text-sm">
                <TableHeader>
                  <TableRow>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Data</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Maria Silva</TableCell>
                    <TableCell>R$ 150,00</TableCell>
                    <TableCell>22/05/2023</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>João Santos</TableCell>
                    <TableCell>R$ 89,90</TableCell>
                    <TableCell>21/05/2023</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Ana Oliveira</TableCell>
                    <TableCell>R$ 200,00</TableCell>
                    <TableCell>20/05/2023</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Clientes Devedores</CardTitle>
            </CardHeader>
            <CardContent>
              <Table className="text-sm">
                <TableHeader>
                  <TableRow>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Valor Devido</TableHead>
                    <TableHead>Desde</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Carlos Ferreira</TableCell>
                    <TableCell>R$ 450,00</TableCell>
                    <TableCell>15/04/2023</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Luciana Mendes</TableCell>
                    <TableCell>R$ 280,00</TableCell>
                    <TableCell>02/05/2023</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Roberto Alves</TableCell>
                    <TableCell>R$ 175,00</TableCell>
                    <TableCell>10/05/2023</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </Layout>
  );
}
