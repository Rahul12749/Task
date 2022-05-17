import React from 'react'
import DataApi from './DataApi'
import Layout from './Layout';
import Login from './Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const HomePage = (loginStatus) => {
  
    return (
    <><BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="allTodo" element={<DataApi />} />
          </Route>
        </Routes>
      </BrowserRouter>  
     <Login/>
    </> 
  )
}

export default HomePage