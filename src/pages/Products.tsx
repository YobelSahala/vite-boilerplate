import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatCurrency } from '@/lib/utils';
import type { Product } from '@/types';

// Sample data
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    description: 'Latest flagship smartphone',
    price: 999,
    category: 'Electronics',
    status: 'active',
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: 'MacBook Air M3',
    description: 'Lightweight laptop with M3 chip',
    price: 1299,
    category: 'Electronics',
    status: 'active',
    createdAt: new Date('2024-01-10'),
  },
  {
    id: '3',
    name: 'AirPods Pro',
    description: 'Premium wireless earbuds',
    price: 249,
    category: 'Electronics',
    status: 'inactive',
    createdAt: new Date('2024-01-05'),
  },
  {
    id: '4',
    name: 'iPad Pro 12.9"',
    description: 'Professional tablet for creatives',
    price: 1099,
    category: 'Electronics',
    status: 'active',
    createdAt: new Date('2024-01-01'),
  },
];

export function Products() {
  const { t } = useTranslation();
  const [products] = useState<Product[]>(sampleProducts);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t('products.title')}</h1>
          <p className="text-muted-foreground">
            Manage your product inventory
          </p>
        </div>
        <Button asChild>
          <Link to="/products/add">
            <Plus className="mr-2 h-4 w-4" />
            {t('products.addNew')}
          </Link>
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={t('products.search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>{t('products.title')}</CardTitle>
          <CardDescription>
            {filteredProducts.length} products found
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t('products.name')}</TableHead>
                <TableHead>{t('products.category')}</TableHead>
                <TableHead>{t('products.price')}</TableHead>
                <TableHead>{t('products.status')}</TableHead>
                <TableHead>{t('products.actions')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {product.description}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{formatCurrency(product.price)}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={product.status === 'active' ? 'default' : 'secondary'}
                    >
                      {t(`products.${product.status}`)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">{t('products.edit')}</span>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">{t('products.delete')}</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}