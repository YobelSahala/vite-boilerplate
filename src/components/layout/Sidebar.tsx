import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Home, 
  Package, 
  Settings, 
  BarChart3, 
  ChevronLeft,
  ChevronRight,
  LogOut,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/stores/useAppStore';

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
  
  const sidebarWidth = sidebarCollapsed ? 80 : 280;

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
        <div className="flex h-16 shrink-0 items-center justify-between border-b px-3">
          {!sidebarCollapsed && (
            <h1 className="text-lg font-semibold">Dashboard</h1>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleSidebar}
            className={cn(
              "flex-shrink-0",
              sidebarCollapsed ? "mx-auto" : "ml-auto"
            )}
          >
            {sidebarCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Navigation */}
        <nav className={cn(
          "flex-1 space-y-1",
          sidebarCollapsed ? "p-2" : "p-4"
        )}>
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  sidebarCollapsed 
                    ? "justify-center p-2"
                    : "justify-start px-3 py-2"
                )}
                title={sidebarCollapsed ? t(`nav.${item.name}`) : undefined}
              >
                <Icon className={cn(
                  "h-5 w-5 flex-shrink-0", 
                  !sidebarCollapsed && "mr-3"
                )} />
                {!sidebarCollapsed && (
                  <span className="truncate">{t(`nav.${item.name}`)}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Logout Button at Bottom */}
        <div className={cn(
          "border-t p-2",
          !sidebarCollapsed && "p-4"
        )}>
          <Button
            variant="ghost"
            onClick={() => {
              // Handle logout logic here
              console.log('Logout clicked');
              // Example: Clear user session, redirect to login, etc.
            }}
            className={cn(
              "w-full flex items-center text-sm font-medium rounded-md transition-colors",
              "text-muted-foreground hover:bg-muted hover:text-foreground",
              sidebarCollapsed 
                ? "justify-center p-2"
                : "justify-start px-3 py-2"
            )}
            title={sidebarCollapsed ? t('common.logout') : undefined}
          >
            <LogOut className={cn(
              "h-5 w-5 flex-shrink-0", 
              !sidebarCollapsed && "mr-3"
            )} />
            {!sidebarCollapsed && (
              <span className="truncate">{t('common.logout')}</span>
            )}
          </Button>
        </div>
      </div>
    </>
  );
}