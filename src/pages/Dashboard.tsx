import { useTranslation } from 'react-i18next';
import { TrendingUp, Users, Package, DollarSign, Eye, Plus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { formatCurrency } from '@/lib/utils';

const stats = [
  {
    title: 'totalRevenue',
    value: 45231.89,
    icon: DollarSign,
    trend: '+20.1%',
    description: 'from last month',
  },
  {
    title: 'totalOrders',
    value: 2350,
    icon: Package,
    trend: '+180.1%',
    description: 'from last month',
  },
  {
    title: 'totalProducts',
    value: 12234,
    icon: Package,
    trend: '+19%',
    description: 'from last month',
  },
  {
    title: 'totalCustomers',
    value: 573,
    icon: Users,
    trend: '+201',
    description: 'from last month',
  },
];

const recentActivities = [
  {
    id: 1,
    action: 'New order received',
    description: 'Order #12345 from John Doe',
    time: '2 minutes ago',
    type: 'order',
  },
  {
    id: 2,
    action: 'Product updated',
    description: 'iPhone 15 Pro stock updated',
    time: '1 hour ago',
    type: 'product',
  },
  {
    id: 3,
    action: 'Customer registered',
    description: 'Sarah Wilson joined',
    time: '3 hours ago',
    type: 'customer',
  },
  {
    id: 4,
    action: 'Payment processed',
    description: 'Payment of $299.99 confirmed',
    time: '5 hours ago',
    type: 'payment',
  },
];

export function Dashboard() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t('dashboard.title')}</h1>
        <p className="text-muted-foreground">{t('dashboard.welcome')}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {t(`dashboard.${stat.title}`)}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stat.title === 'totalRevenue' 
                    ? formatCurrency(stat.value) 
                    : stat.value.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{stat.trend}</span> {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Activity */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>{t('dashboard.recentActivity')}</CardTitle>
            <CardDescription>
              Recent activities in your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {activity.action}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>{t('dashboard.quickActions')}</CardTitle>
            <CardDescription>
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button asChild className="w-full justify-start">
              <Link to="/products/add">
                <Plus className="mr-2 h-4 w-4" />
                {t('products.addNew')}
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full justify-start">
              <Link to="/analytics">
                <Eye className="mr-2 h-4 w-4" />
                {t('dashboard.viewAnalytics')}
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full justify-start">
              <Link to="/products">
                <Package className="mr-2 h-4 w-4" />
                {t('dashboard.manageProducts')}
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Chart Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
          <CardDescription>
            Monthly revenue for the last 6 months
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-center justify-center bg-muted rounded-md">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">
                Chart component placeholder
              </p>
              <p className="text-xs text-muted-foreground">
                Integrate with your preferred charting library
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}