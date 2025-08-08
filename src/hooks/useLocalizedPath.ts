import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function useLocalizedPath() {
  const location = useLocation();
  const { t } = useTranslation();

  const getBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    const breadcrumbs = [
      {
        label: t('nav.dashboard'),
        href: '/',
      },
    ];

    if (pathSegments.length > 0) {
      pathSegments.forEach((segment, index) => {
        const path = '/' + pathSegments.slice(0, index + 1).join('/');
        
        let label = '';
        switch (segment) {
          case 'products':
            label = t('nav.products');
            break;
          case 'add':
            label = t('nav.addProduct');
            break;
          case 'settings':
            label = t('nav.settings');
            break;
          case 'analytics':
            label = t('nav.analytics');
            break;
          default:
            label = segment.charAt(0).toUpperCase() + segment.slice(1);
        }

        breadcrumbs.push({
          label,
          href: path,
        });
      });
    }

    return breadcrumbs;
  };

  return { getBreadcrumbs, currentPath: location.pathname };
}