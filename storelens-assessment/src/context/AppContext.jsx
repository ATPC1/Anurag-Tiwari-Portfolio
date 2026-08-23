import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [storeConnected, setStoreConnected] = useState(false);
  const [hasCompletedTour, setHasCompletedTour] = useState(false);
  const [onboardingStep, setOnboardingStep] = useState(0); 
  // 0: Initial, 1: Verify Email, 2: Connect Store, 3: Importing, 4: Personalize, 5: Complete

  const login = () => setIsAuthenticated(true);
  const logout = () => {
    setIsAuthenticated(false);
    setStoreConnected(false);
    setHasCompletedTour(false);
    setOnboardingStep(0);
  };

  return (
    <AppContext.Provider value={{
      isAuthenticated, login, logout,
      storeConnected, setStoreConnected,
      hasCompletedTour, setHasCompletedTour,
      onboardingStep, setOnboardingStep
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
