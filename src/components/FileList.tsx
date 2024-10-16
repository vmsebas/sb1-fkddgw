import { FileIcon, FileTextIcon, ImageIcon } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

interface FileListProps {
  onFileSelect: (fileName: string) => void;
  selectedFiles: string[];
}

export const FileList: React.FC<FileListProps> = ({ onFileSelect, selectedFiles }) => {
  const files = [
    { name: 'document.pdf', type: 'pdf', size: '2.5 MB', modified: '2023-06-01' },
    { name: 'image.jpg', type: 'image', size: '1.8 MB', modified: '2023-05-28' },
    { name: 'spreadsheet.xlsx', type: 'spreadsheet', size: '3.2 MB', modified: '2023-05-25' },
    // Add more files as needed
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileTextIcon className="h-6 w-6 text-red-500" />;
      case 'image':
        return <ImageIcon className="h-6 w-6 text-blue-500" />;
      default:
        return <FileIcon className="h-6 w-6 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-2">
      {files.map((file) => (
        <div
          key={file.name}
          className={`flex items-center p-2 rounded-lg ${
            selectedFiles.includes(file.name) ? 'bg-accent' : 'hover:bg-accent/50'
          }`}
        >
          <Checkbox
            checked={selectedFiles.includes(file.name)}
            onCheckedChange={() => onFileSelect(file.name)}
            className="mr-2"
          />
          {getFileIcon(file.type)}
          <div className="ml-3 flex-grow">
            <p className="text-sm font-medium">{file.name}</p>
            <p className="text-xs text-muted-foreground">{file.size}</p>
          </div>
          <p className="text-xs text-muted-foreground">{file.modified}</p>
        </div>
      ))}
    </div>
  );
};