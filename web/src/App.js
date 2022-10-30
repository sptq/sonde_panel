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
import { AppConfig } from "./pages/AppConfig";
import { RemoteConnection } from "./pages/RemoteConnection";
import { RemoteDatabase } from "./pages/RemoteDatabase";
import { Status } from "./pages/Status";
import { SignIn } from "./pages/SignIn";
import { Provider } from "react-redux";
import store from './store';
import { MainPage } from "./pages/MainPage";

function App() {
  const router = createBrowserRouter([
    {
      path: '/sign-in',
      element: <SignIn />,
    },
    {
      path: '/',
      element: <MainPage />,
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
          path: '/status',
          element: <Status />,
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
          path: '/app-configuration',
          element: <AppConfig />,
        },
        {
          path: '/remote-connection',
          element: <RemoteConnection />,
        },
        {
          path: '/remote-database',
          element: <RemoteDatabase />,
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
      <Provider store={store}>
        <RouterProvider
          router={router}
          fallbackElement={<div>Loading...</div>}
        />
      </Provider>
    </div>
  );
}

export default App;
