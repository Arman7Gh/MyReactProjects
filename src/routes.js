import React from 'react';


const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Categories = React.lazy(() => import('./pages/base/category/categoryList'));
const MyCounter = React.lazy(() => import('./pages/base/counter/MyCounter'));
const ProductList = React.lazy(() => import('./pages/base/product/ProductList'));
const AddCategory = React.lazy(() => import('./pages/base/category/addnewcategory/AddCategory.js'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/categories', exact: true, name: 'گروه بندی محصول', component: Categories },
  { path: '/counter', exact: true, name: 'تست شمارنده', component: MyCounter },
  { path: '/products', exact: true, name: 'لیست محصولات', component: ProductList },
  { path: '/addcategory', exact: true, name: 'گروه جدید', component: AddCategory },
];

export default routes;
