import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet, BrowserRouter } from 'react-router-dom';
import TabsSegmentedControls from './components/tab';
import ButtonAppBar from './components/tabchild1';
import DataTable from './components/table1';
import DataList from './components/grid';
import BasicGrid from './components/DataGrid';
import CardVariants from './components/Dataset';
import InputFormProps from './Edit';
 

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (

      <>
 <BrowserRouter>
<ButtonAppBar />
<Routes>
<Route path="/" element={<BasicGrid />}>
<Route path="/list" element={<DataTable />} />
<Route path="" element={<DataList />} />
</Route>
<Route path="/dataset" element={<CardVariants/>} />
<Route path="/editData" element={<InputFormProps/>}/>
</Routes>
</BrowserRouter> 

  
    </>


  );
}

export default App;