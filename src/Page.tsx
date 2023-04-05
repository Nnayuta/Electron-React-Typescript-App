import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Splash } from './Components/Splash';
import { Layout } from './Layout';
import { Login } from './pages/Login';

interface ProtectedRouterProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

const ProtectedRouter: React.FC<ProtectedRouterProps> = ({
  isAuthenticated,
  children,
}) => {
  if (!isAuthenticated) return <><Window /><Login /></>;

  return <>{children}</>;
};

import { Window } from './Components/Window';
import { AuthContext } from './contexts/AuthContext';

export const Page: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <>
      <Routes>
        <Route path="/splash" element={<Splash />} />
        <Route
          path="/"
          element={
            <ProtectedRouter isAuthenticated={isAuthenticated}>
              <Window />
              <Layout />
            </ProtectedRouter>
          }
        />
      </Routes>
    </>
  );
};

//https://www.robinwieruch.de/react-router-private-routes/
