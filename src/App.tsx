import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Dashboard } from '@/pages/Dashboard';
import { Products } from '@/pages/Products';
import { AddProduct } from '@/pages/AddProduct';
import { useTheme } from '@/hooks/useTheme';
import '@/lib/i18n';
import './index.css';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      // cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

// Placeholder components for other routes
function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      <p className="text-muted-foreground">
        Configure your application settings here.
      </p>
      <div className="h-[400px] flex items-center justify-center bg-muted rounded-md">
        <p className="text-muted-foreground">Settings page placeholder</p>
      </div>
    </div>
  );
}

function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
      <p className="text-muted-foreground">
        View your analytics and insights here.
      </p>
      <div className="h-[400px] flex items-center justify-center bg-muted rounded-md">
        <p className="text-muted-foreground">Analytics page placeholder</p>
      </div>
    </div>
  );
}

function App() {
  // Initialize theme
  useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="products/add" element={<AddProduct />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;