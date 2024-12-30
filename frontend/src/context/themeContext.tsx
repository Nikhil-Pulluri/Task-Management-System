'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

// Define the possible themes
type Theme = 'light' | 'dark'

// Define the context shape
interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Create a provider component
interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light') // Default theme

  const toggleTheme = () => {
    console.log(theme)
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

// Custom hook for using the ThemeContext
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
