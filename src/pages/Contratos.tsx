import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileUp, Eye, Edit } from 'lucide-react';

const Contratos = () => {
  const [contratos, setContratos] = useState([
    { id: 1, numero: 'C001', cliente: 'Cliente X', fechaInicio: '2023-01-01', fechaFin: '2023-12-31', estado: 'Activo' },
    { id: 2, numero: 'C002', cliente: 'Cliente Y', fechaInicio: '2023-02-15', fechaFin: '2024-02-14', estado: 'Activo' },
    { id: 3, numero: 'C003', cliente: 'Cliente Z', fechaInicio: '2022-06-01', fechaFin: '2023-05-31', estado: 'Expirado' },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Contratos</h1>
      <div className="flex justify-between items-center mb-6">
        <Input type="text" placeholder="Buscar contratos..." className="max-w-sm" />
        <Button>
          <FileUp className="mr-2 h-4 w-4" />
          Nuevo Contrato
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Número</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Fecha Inicio</TableHead>
            <TableHead>Fecha Fin</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contratos.map((contrato) => (
            <TableRow key={contrato.id}>
              <TableCell>{contrato.numero}</TableCell>
              <TableCell>{contrato.cliente}</TableCell>
              <TableCell>{contrato.fechaInicio}</TableCell>
              <TableCell>{contrato.fechaFin}</TableCell>
              <TableCell>{contrato.estado}</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Contratos;