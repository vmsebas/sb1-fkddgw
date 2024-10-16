import { useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import Dashboard from '@/components/Dashboard';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <ThemeProvider defaultTheme={isDarkMode ? 'dark' : 'light'} storageKey="vite-ui-theme">
      <Dashboard setIsDarkMode={setIsDarkMode} />
    </ThemeProvider>
  );
}

export default App;