import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileUp, Download, Eye } from 'lucide-react';

const DocumentacionLegal = () => {
  const [documentos, setDocumentos] = useState([
    { id: 1, nombre: 'Certificado de Constitución', tipo: 'Certificado', fechaRegistro: '2023-01-15' },
    { id: 2, nombre: 'Poder Notarial', tipo: 'Documento Legal', fechaRegistro: '2023-03-22' },
    { id: 3, nombre: 'Licencia de Operación', tipo: 'Certificado', fechaRegistro: '2023-05-10' },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Documentación Legal</h1>
      <div className="flex justify-between items-center mb-6">
        <Input type="text" placeholder="Buscar documentos..." className="max-w-sm" />
        <Button>
          <FileUp className="mr-2 h-4 w-4" />
          Subir Documento
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Fecha de Registro</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {documentos.map((documento) => (
            <TableRow key={documento.id}>
              <TableCell>{documento.nombre}</TableCell>
              <TableCell>{documento.tipo}</TableCell>
              <TableCell>{documento.fechaRegistro}</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DocumentacionLegal;