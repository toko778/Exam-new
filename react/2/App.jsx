import React, { useState, useEffect, createContext, useContext, useMemo, useCallback } from 'react';

// 3. useContext-ისთვის კონტექსტის შექმნა
const ThemeContext = createContext();

// 4. საკუთარი (Custom) Hook-ის შექმნა
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  return { count, increment, decrement };
}

function ChildComponent() {
  const theme = useContext(ThemeContext);
  return <p style={{ color: theme === 'dark' ? '#fff' : '#333' }}>მიმდინარე თემა (useContext-იდან): {theme}</p>;
}

export default function App() {
  // 1. useState-ის გამოყენება
  const [text, setText] = useState('');
  const [theme, setTheme] = useState('light');

  // 2. useEffect-ის გამოყენება
  useEffect(() => {
    document.title = `ტექსტი: ${text}`;
  }, [text]);

  // 4. Custom Hook-ის გამოყენება
  const { count, increment, decrement } = useCounter(5);

  // 5. useCallback და useMemo წარმადობისთვის
  const expensiveCalculation = (num) => {
    console.log('მიმდინარეობს რთული გამოთვლა...');
    return num * 2;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  const handleClick = useCallback(() => {
    console.log('ღილაკზე დაჭერა (useCallback)');
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: '20px', background: theme === 'dark' ? '#222' : '#f9f9f9', minHeight: '100vh' }}>
        <h2>React Hooks დემონსტრაცია (დავალება 2)</h2>

        {/* useState */}
        <div style={{ margin: '15px 0' }}>
          <h3>1. useState</h3>
          <input 
            type="text" 
            placeholder="ჩაწერე რამე..." 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
          />
          <p>შეყვანილი ტექსტი: {text}</p>
        </div>

        {/* useEffect */}
        <div style={{ margin: '15px 0' }}>
          <h3>2. useEffect</h3>
          <p>გვერდის სათაური შეიცვალა ტექსტის მიხედვით.</p>
        </div>

        {/* useContext */}
        <div style={{ margin: '15px 0' }}>
          <h3>3. useContext</h3>
          <ChildComponent />
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            თემის შეცვლა
          </button>
        </div>

        {/* Custom Hook */}
        <div style={{ margin: '15px 0' }}>
          <h3>4. Custom Hook (useCounter)</h3>
          <p>მრიცხველი: {count}</p>
          <button onClick={increment}>ზრდა</button>
          <button onClick={decrement} style={{ marginLeft: '10px' }}>კლება</button>
        </div>

        {/* useMemo & useCallback */}
        <div style={{ margin: '15px 0' }}>
          <h3>5. useMemo და useCallback</h3>
          <p>გამოთვლილი მნიშვნელობა (useMemo): {memoizedValue}</p>
          <button onClick={handleClick}>მოქმედება (useCallback)</button>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}