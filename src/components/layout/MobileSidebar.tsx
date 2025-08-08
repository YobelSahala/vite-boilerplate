import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Home, 
  Package, 
  Settings, 
  BarChart3, 
  Menu,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navigation = [
  { name: 'dashboard', href: '/', icon: Home },
  { name: 'products', href: '/products', icon: Package },
  { name: 'analytics', href: '/analytics', icon: BarChart3 },
  { name: 'settings', href: '/settings', icon: Settings },
];

export function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">{t('common.toggleSidebar')}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Dashboard</SheetTitle>
        </SheetHeader>
        <nav className="flex-1 space-y-1 p-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="h-5 w-5 mr-3" />
                {t(`nav.${item.name}`)}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}