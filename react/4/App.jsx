import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

// მთავარი გვერდი
function Home() {
  return (
    <div>
      <h2>მთავარი გვერდი (Home)</h2>
      <p>მოგესალმებით SPA აპლიკაციაში!</p>
    </div>
  );
}

// შესახებ გვერდი
function About() {
  return (
    <div>
      <h2>ჩვენ შესახებ (About)</h2>
      <p>ეს არის React Router-ის დემონსტრაციის გვერდი.</p>
    </div>
  );
}

// დინამიური პროდუქტის გვერდი (useParams-ის გამოყენება)
function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>პროდუქტის დეტალები</h2>
      <p>პროდუქტის ID: <strong>{id}</strong></p>
      <button onClick={() => useNavigate_to_home(navigate)}>უკან დაბრუნება</button>
    </div>
  );
}

function useNavigate_to_home(navigate) {
  navigate('/');
}

// ძირითადი App კომპონენტი Router-ით
export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px' }}>
        <h2>React Router ნავიგაცია (დავალება 4)</h2>
        
        {/* 1. ბმულები (Links) */}
        <nav style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
          <Link to="/">მთავარი</Link>
          <Link to="/about">ჩვენ შესახებ</Link>
          <Link to="/product/42">პროდუქტი 42</Link>
        </nav>

        <hr />

        {/* მარშრუტები (Routes) */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}