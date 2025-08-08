import { useTranslation } from 'react-i18next';
import { Globe, Palette, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { MobileSidebar } from './MobileSidebar';
import { useTheme } from '@/hooks/useTheme';
import { useAppStore } from '@/stores/useAppStore';
import i18n from '@/lib/i18n';

export function Header() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useAppStore();

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'id' : 'en';
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light': return 'Light';
      case 'dark': return 'Dark';
      case 'colorful': return 'Colorful';
      default: return 'Light';
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4">
        {/* Mobile menu button */}
        <MobileSidebar />
        
        {/* Desktop title (hidden on mobile) */}
        <div className="hidden md:block">
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>

        {/* Right side controls */}
        <div className="flex items-center space-x-2">
          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            title={t('common.switchLanguage')}
          >
            <Globe className="h-4 w-4" />
            <span className="ml-1 text-xs">
              {language.toUpperCase()}
            </span>
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            title={t('common.switchTheme')}
          >
            <Palette className="h-4 w-4" />
            <span className="ml-1 text-xs hidden sm:inline">
              {getThemeLabel()}
            </span>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative">
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="text-xs">JD</AvatarFallback>
                </Avatar>
                <span className="ml-2 hidden sm:inline">John Doe</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}