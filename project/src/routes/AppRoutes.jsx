import React from 'react'
import { Route, Routes } from "react-router-dom";
import Main from '../comps/Main';
import App from '../App';

export default function AppRoutes() {
  return (
    <div className='container'>
        <App/>
        <Routes>
            <Route/>
        </Routes>
    </div>
  )
}
