import React, { useState } from 'react';
import Dashboard from './Dashboard.jsx';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SupplierDashboard from './Supplier/supplierdashboard.jsx';
import CreateSuppliers from './Supplier/CreateSuppliers.jsx';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import PermissionManagement from './components/PermissionManagement';
import ProductManagement from './components/ProductManagement.jsx';
import CategoryManagement from './components/CategoryManagement.jsx';
import StockManagement from './components/StockManagement.jsx';

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <Router> 
     <Routes>
         <Route path="/" element={<Dashboard/>} />
         <Route path="/supplier" element={<SupplierDashboard/>}/>
         <Route path="/create" element={<CreateSuppliers/>}/>
         <Route path="/users" element={<UserManagement/>}/>
         <Route path="/roles" element={<RoleManagement/>}/>
         <Route path="/permissions" element={<PermissionManagement/>}/>
         <Route path="/product" element={<ProductManagement/>}/>
         <Route path="/category" element={<CategoryManagement/>}/>
         <Route path="/stock" element={<StockManagement/>}/>
     </Routes>
    </Router>
  );
}

export default App;
