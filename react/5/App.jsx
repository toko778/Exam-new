import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store, increment, decrement, incrementByAmount } from './store';

function CounterComponent() {
  // 4. State-ის წაკითხვა store-იდან useSelector-ის გამოყენებით
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h3>Redux Toolkit მრიცხველი: {count}</h3>
      {/* 5. Action-ების გამოძახება dispatch-ით */}
      <button onClick={() => dispatch(increment())}>ზრდა (+)</button>
      <button onClick={() => dispatch(decrement())} style={{ margin: '0 10px' }}>კლება (-)</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>მეტის დამატება (+5)</button>
    </div>
  );
}

// 3. Provider-ის გამოყენება მთლიანი აპლიკაციისთვის
export default function App() {
  return (
    <Provider store={store}>
      <div style={{ padding: '20px' }}>
        <h2>Redux Toolkit დემონსტრაცია (დავალება 5)</h2>
        <CounterComponent />
      </div>
    </Provider>
  );
}