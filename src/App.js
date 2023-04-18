import './App.css';
import Header from './components/Header'
import { ChakraProvider } from "@chakra-ui/react";
import ClientList from './features/client/pages/clientList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BudgetList from './features/Budget/pages/Budget';
import EmployeeList from './features/employee/pages/employeeList';
import Home from './features/home/pages/home';
import db_clients from './mocks/clients';
import db_employee from './mocks/employees';
import db_budget from './mocks/budget';
import db_os from './mocks/os';


function App() {
    localStorage.setItem("cad_client", JSON.stringify(db_clients))
    localStorage.setItem("cad_employee", JSON.stringify(db_employee))
    localStorage.setItem("cad_budget", JSON.stringify(db_budget))
    localStorage.setItem("cad_os", JSON.stringify(db_os))
  return (
    <BrowserRouter>
    <ChakraProvider>
      <Header />
      <Routes>
        <Route path='/' Component={ Home } />
        <Route path='/clientes' Component={ ClientList } />
        <Route path='/orcamentos' Component={ BudgetList } />
        <Route path='/colaborador' Component={ EmployeeList } />
      </Routes>
    </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;