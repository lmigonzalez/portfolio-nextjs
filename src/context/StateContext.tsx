import { type } from 'os';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';

  changeTheme: () => void;
}

const Context = createContext<ThemeContextType>({
  theme: 'dark',
  changeTheme: () => {},
});

type ThemeProviderProps = {
  children: ReactNode;
};

const useTheme = () => useContext(Context);

export const StateContext: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  function changeTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <Context.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
