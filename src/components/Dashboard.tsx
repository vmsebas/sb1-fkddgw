import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { MainContent } from '@/components/MainContent';
import { ScrollArea } from '@/components/ui/scroll-area';
import Facturacion from '@/pages/Facturacion';
import Contratos from '@/pages/Contratos';
import DocumentacionLegal from '@/pages/DocumentacionLegal';

interface DashboardProps {
  setIsDarkMode: (isDark: boolean) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ setIsDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('Dashboard');

  const renderContent = () => {
    switch (selectedCategory) {
      case 'Facturación':
        return <Facturacion />;
      case 'Contratos':
        return <Contratos />;
      case 'Documentación Legal':
        return <DocumentacionLegal />;
      default:
        return <MainContent selectedCategory={selectedCategory} />;
    }
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setIsDarkMode={setIsDarkMode}
      />
      <ScrollArea className="flex-grow">
        {renderContent()}
      </ScrollArea>
    </div>
  );
};

export default Dashboard;