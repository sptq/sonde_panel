import './App.css';
import Paperbase from './components/Paperbase';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SondeDatabase } from './pages/SondeDatabase';
import { SDR } from './pages/SDR';
import { SDRConfiguration } from './pages/SDRConfiguration';
import * as React from 'react';
import { Sonde } from "./pages/Sonde";
import { Processes } from "./pages/Processes";
import { Map } from "./pages/Map";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Paperbase />,
      children: [
        {
          path: '/',
          element: <SondeDatabase />,
        },
        {
          path: '/sdr',
          element: <SDR />,
        },
        {
          path: '/processes',
          element: <Processes />,
        },
        {
          path: '/map',
          element: <Map />,
        },
        {
          path: '/sdr-configuration',
          element: <SDRConfiguration />,
        },
        {
          path: '/sonde/:name',
          element: <Sonde />,
        }
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
