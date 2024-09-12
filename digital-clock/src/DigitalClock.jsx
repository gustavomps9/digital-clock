import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='clock-container'>
      <h1>Tic Tac - Relógio</h1>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  );
}

export default DigitalClock;