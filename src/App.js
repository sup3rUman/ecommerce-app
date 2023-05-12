import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomeLayout from './Layouts/HomeLayout';
import Home from './Pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<HomeLayout/>}>
      <Route exact element={<Home/>}/>
    </Route>

  )
)

function App() {
  return (
    <RouterProvider router= {router}/>
  );
}

export default App;
