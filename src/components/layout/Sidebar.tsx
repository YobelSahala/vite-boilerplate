import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Home, 
  Package, 
  Settings, 
  BarChart3, 
  ChevronLeft,
  ChevronRight,
  Menu,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/stores/useAppStore';
import { useResize } from '@/hooks/useResize';

const navigation = [
  { name: 'dashboard', href: '/', icon: Home },
  { name: 'products', href: '/products', icon: Package },
  { name: 'analytics', href: '/analytics', icon: BarChart3 },
  { name: 'settings', href: '/settings', icon: Settings },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const { sidebarCollapsed, toggleSidebar } = useAppStore();
  
  const { width, startResize, isResizing } = useResize({
    initialWidth: 280,
    minWidth: 200,
    maxWidth: 400,
  });

  const sidebarWidth = sidebarCollapsed ? 60 : width;

  return (
    <>
      {/* Desktop Sidebar */}
      <div 
        className={cn(
          "hidden md:flex md:flex-col md:fixed md:inset-y-0 md:z-50 bg-card border-r transition-all duration-300",
          className
        )}
        style={{ width: sidebarWidth }}
      >
        {/* Sidebar Header */}
        <div className="flex h-16 shrink-0 items-center justify-between px-4 border-b">
          {!sidebarCollapsed && (
            <h1 className="text-lg font-semibold">Dashboard</h1>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleSidebar}
            className="ml-auto"
          >
            {sidebarCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  sidebarCollapsed ? "justify-center" : "justify-start"
                )}
                title={sidebarCollapsed ? t(`nav.${item.name}`) : undefined}
              >
                <Icon className={cn("h-5 w-5", !sidebarCollapsed && "mr-3")} />
                {!sidebarCollapsed && t(`nav.${item.name}`)}
              </Link>
            );
          })}
        </nav>

        {/* Resize Handle */}
        {!sidebarCollapsed && (
          <div
            className="absolute right-0 top-0 h-full w-1 cursor-col-resize hover:bg-primary/20 transition-colors"
            onMouseDown={startResize}
          />
        )}
      </div>
    </>
  );
}