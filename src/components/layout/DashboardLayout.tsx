import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Breadcrumbs } from './Breadcrumbs';
import { useAppStore } from '@/stores/useAppStore';
import { cn } from '@/lib/utils';

export function DashboardLayout() {
  const { sidebarCollapsed } = useAppStore();
  
  // Updated widths to match the new sidebar sizing
  const sidebarWidth = sidebarCollapsed ? 80 : 280;

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      {/* Main content */}
      <div 
        className={cn(
          "flex flex-col transition-all duration-300",
          "md:ml-0"
        )}
        style={{ 
          marginLeft: window.innerWidth >= 768 ? sidebarWidth : 0 
        }}
      >
        <Header />
        
        <main className="flex-1 p-6">
          <Breadcrumbs />
          <Outlet />
        </main>
      </div>
    </div>
  );
}