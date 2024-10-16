import { FileIcon, FileTextIcon, ImageIcon } from 'lucide-react';

export const SuggestedFiles: React.FC = () => {
  const suggestedFiles = [
    { name: 'Design Resources', type: 'folder', icon: <FileIcon className="h-10 w-10 text-blue-500" /> },
    { name: 'magne-WPVZPhEdZn-unsplash.jpg', type: 'image', icon: <ImageIcon className="h-10 w-10 text-green-500" /> },
    { name: 'Fluorine - Task Management.fig', type: 'figma', icon: <FileTextIcon className="h-10 w-10 text-purple-500" /> },
    { name: 'layers-three-01.svg', type: 'svg', icon: <ImageIcon className="h-10 w-10 text-orange-500" /> },
    { name: 'Apple_Watch_Mockup.psd', type: 'photoshop', icon: <FileTextIcon className="h-10 w-10 text-blue-700" /> },
  ];

  return (
    <div className="flex space-x-4 overflow-x-auto pb-2">
      {suggestedFiles.map((file) => (
        <div key={file.name} className="flex flex-col items-center">
          {file.icon}
          <p className="mt-2 text-xs text-center w-24 truncate">{file.name}</p>
        </div>
      ))}
    </div>
  );
};