import { useState } from 'react';
import { Search, Upload, FolderPlus, Share2, Download, Trash2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { FileList } from '@/components/FileList';
import { SuggestedFiles } from '@/components/SuggestedFiles';

interface MainContentProps {
  selectedCategory: string;
}

export const MainContent: React.FC<MainContentProps> = ({ selectedCategory }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  const handleFileSelect = (fileName: string) => {
    setSelectedFiles(prev =>
      prev.includes(fileName)
        ? prev.filter(f => f !== fileName)
        : [...prev, fileName]
    );
  };

  const handleSelectAll = () => {
    // Implement select all logic
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{selectedCategory}</h2>
        <div className="flex space-x-2">
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>
          <Button variant="outline">
            <FolderPlus className="mr-2 h-4 w-4" />
            Create
          </Button>
        </div>
      </div>
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search files..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
          icon={<Search className="h-4 w-4" />}
        />
      </div>
      <Card className="mb-6">
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-4">Suggested from</h3>
          <SuggestedFiles />
        </CardContent>
      </Card>
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Checkbox id="selectAll" onCheckedChange={handleSelectAll} />
          <label htmlFor="selectAll" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Select All
          </label>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Sort By</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Name</DropdownMenuItem>
            <DropdownMenuItem>Date</DropdownMenuItem>
            <DropdownMenuItem>Size</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <FileList onFileSelect={handleFileSelect} selectedFiles={selectedFiles} />
      {selectedFiles.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 flex justify-between items-center">
          <span>{selectedFiles.length} file(s) selected</span>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button variant="outline" size="sm">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};