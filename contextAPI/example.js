import React from 'react';
import { useTheme } from './ThemeContext'; // Import the custom hook

const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); // Destructure theme and toggleTheme from context
  
  return (
    <nav style={{ 
      backgroundColor: theme === 'light' ? '#fff' : '#333', 
      color: theme === 'light' ? '#000' : '#fff' 
    }}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
};

export default Navbar;
{/*

    ThemeContext.js


    import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme is light
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);


App.js


import React from 'react';
import { ThemeProvider } from './ThemeContext'; // Import ThemeProvider
import Navbar from './Navbar';
import Content from './Content';

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Content />
      </div>
    </ThemeProvider>
  );
};

export default App;


Content.js
import React from 'react';
import { useTheme } from './ThemeContext';

const Content = () => {
  const { theme } = useTheme();
  
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: theme === 'light' ? '#f4f4f4' : '#222',
      color: theme === 'light' ? '#000' : '#fff' 
    }}>
      <h2>Current Theme: {theme}</h2>
      <p>This content will change based on the theme.</p>
    </div>
  );
};

export default Content;

*/ 
}


{/*react application to pass information from one component to another
component

App.js
import React from 'react';
import Products from './Products';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
Product.js
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Face mask' },
  { id: 2, name: 'Moisturizer' },  // Fixed spelling
  { id: 3, name: 'Lip gloss' }
];

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchParams({ query: value });
  };
  
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  
  return (
    <div>
      <h2>Product List</h2>
      <input 
        type="text" 
        value={query} 
        onChange={handleSearch} 
        placeholder="Search products..."
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;

*/}

