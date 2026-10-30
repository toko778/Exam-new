import React from 'react';
import PropTypes from 'prop-types';

// 1. შვილი კომპონენტი, რომელიც იღებს მონაცემებს props-ით
function UserCard({ name, age, role, children }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0', borderRadius: '5px' }}>
      <h3>მომხმარებლის სახელი: {name}</h3>
      <p>ასაკი: {age}</p>
      <p>პოზიცია: {role}</p>
      {/* 3. children props-ის გამოყენება */}
      <div style={{ marginTop: '10px', fontStyle: 'italic', color: '#555' }}>
        {children}
      </div>
    </div>
  );
}

// 4. PropTypes-ის ვალიდაცია props-ებისთვის
UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  role: PropTypes.string,
  children: PropTypes.node,
};

// Default props (სურვილისამებრ)
UserCard.defaultProps = {
  role: 'სტუდენტი',
};

// 2. მშობელი კომპონენტი, რომელიც გადასცემს მონაცემებს
export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>მონაცემთა გადაცემა Props-ის გამოყენებით (დავალება 3)</h2>

      {/* ვუგზავნით მონაცემებს და შიგნით ვათავსებთ children ელემენტს */}
      <UserCard name="თორნიკე" age={32} role="Technical Manager">
        <p>⭐ ეს ინფორმაცია გადმოცემულია children props-ის მეშვეობით!</p>
      </UserCard>

      <UserCard name="გიორგი" age={28}>
        <p>⭐ დამატებითი აღწერა მეორე მომხმარებლისთვის.</p>
      </UserCard>
    </div>
  );
}