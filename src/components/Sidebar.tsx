import { useState } from 'react';
import { Folder, FileText, FileCheck, File, Receipt, BarChart2, FileSpreadsheet, ChevronDown, ChevronRight, HardDrive, Sun, Moon } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useTheme } from '@/components/theme-provider';

interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  setIsDarkMode: (isDark: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ selectedCategory, setSelectedCategory, setIsDarkMode }) => {
  const { theme, setTheme } = useTheme();
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const categories = [
    { name: 'Dashboard', icon: <Folder className="mr-2 h-4 w-4" />, subcategories: [] },
    { name: 'Facturación', icon: <FileText className="mr-2 h-4 w-4" />, subcategories: ['Facturas Pendientes', 'Facturas Pagadas'] },
    { name: 'Contratos', icon: <FileCheck className="mr-2 h-4 w-4" />, subcategories: ['Contratos Actuales', 'Contratos Expirados'] },
    { name: 'Documentación Legal', icon: <File className="mr-2 h-4 w-4" />, subcategories: ['Documentos Registrados', 'Certificados', 'Otros Documentos Legales'] },
    { name: 'Recibos', icon: <Receipt className="mr-2 h-4 w-4" />, subcategories: ['Recibos de Servicios', 'Recibos de Alquiler'] },
    { name: 'Extractos Bancarios', icon: <BarChart2 className="mr-2 h-4 w-4" />, subcategories: ['Año Actual', 'Años Anteriores'] },
    { name: 'Impuestos', icon: <FileSpreadsheet className="mr-2 h-4 w-4" />, subcategories: ['Declaraciones Fiscales', 'Pagos de Impuestos'] },
  ];

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setIsDarkMode(newTheme === 'dark');
  };

  return (
    <div className="w-64 bg-background border-r border-border flex flex-col">
      <div className="p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Folder</h1>
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
        </Button>
      </div>
      <ScrollArea className="flex-grow">
        <nav className="space-y-1 p-2">
          {categories.map((category) => (
            <div key={category.name}>
              <Button
                variant={selectedCategory === category.name ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => {
                  setSelectedCategory(category.name);
                  if (category.subcategories.length > 0) {
                    toggleCategory(category.name);
                  }
                }}
              >
                {category.icon}
                <span>{category.name}</span>
                {category.subcategories.length > 0 && (
                  expandedCategories.includes(category.name)
                    ? <ChevronDown className="ml-auto h-4 w-4" />
                    : <ChevronRight className="ml-auto h-4 w-4" />
                )}
              </Button>
              {expandedCategories.includes(category.name) && (
                <div className="ml-6 mt-1 space-y-1">
                  {category.subcategories.map((subcategory) => (
                    <Button
                      key={subcategory}
                      variant="ghost"
                      className="w-full justify-start text-sm"
                      onClick={() => setSelectedCategory(subcategory)}
                    >
                      {subcategory}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </ScrollArea>
      <div className="p-4 border-t border-border">
        <div className="flex items-center mb-2">
          <HardDrive className="mr-2 h-4 w-4" />
          <span className="text-sm font-medium">Storage</span>
        </div>
        <Progress value={33} className="h-2" />
        <p className="text-xs mt-1">6.4 GB of 64 GB used</p>
      </div>
    </div>
  );
};