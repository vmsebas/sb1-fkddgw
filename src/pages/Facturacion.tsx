import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileUp, Download, Share2 } from 'lucide-react';

const Facturacion = () => {
  const [facturas, setFacturas] = useState([
    { id: 1, numero: 'F001', cliente: 'Cliente A', monto: 1000, estado: 'Pendiente' },
    { id: 2, numero: 'F002', cliente: 'Cliente B', monto: 1500, estado: 'Pagada' },
    { id: 3, numero: 'F003', cliente: 'Cliente C', monto: 2000, estado: 'Pendiente' },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Facturación</h1>
      <div className="flex justify-between items-center mb-6">
        <Input type="text" placeholder="Buscar facturas..." className="max-w-sm" />
        <Button>
          <FileUp className="mr-2 h-4 w-4" />
          Subir Factura
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Número</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Monto</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {facturas.map((factura) => (
            <TableRow key={factura.id}>
              <TableCell>{factura.numero}</TableCell>
              <TableCell>{factura.cliente}</TableCell>
              <TableCell>${factura.monto}</TableCell>
              <TableCell>{factura.estado}</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Facturacion;