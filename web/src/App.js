import './App.css';
import Paperbase from './components/Paperbase';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SondeDatabase } from './pages/SondeDatabase';
import { SDR } from './pages/SDR';
import { SDRConfiguration } from './pages/SDRConfiguration';
import * as React from 'react';
import { Sonde } from "./pages/Sonde";

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
