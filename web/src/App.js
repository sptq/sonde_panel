import './App.css';
import Paperbase from './components/Paperbase';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SondeDatabase } from './pages/SondeDatabase';
import { SDR } from './pages/SDR';
import { SDRConfiguration } from './pages/SDRConfiguration';
import * as React from 'react';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Paperbase />,
      children: [
        {
          path: '/sonde-database',
          element: <SondeDatabase />,
        },
        {
          path: '/sdr',
          element: <SDR />,
        },
        {
          path: '/sdr-configuration',
          element: <SDRConfiguration />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
        <RouterProvider
          router={router}
          fallbackElement={<div>Loading...</div>}
        />
    </div>
  );
}

export default App;
