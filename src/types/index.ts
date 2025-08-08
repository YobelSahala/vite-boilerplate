export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  status: 'active' | 'inactive';
  createdAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface DashboardStats {
  totalRevenue: number;
  totalOrders: number;
  totalProducts: number;
  totalCustomers: number;
}

export type Theme = 'light' | 'dark' | 'colorful';

export interface AppState {
  user: User | null;
  theme: Theme;
  sidebarCollapsed: boolean;
  language: string;
}
