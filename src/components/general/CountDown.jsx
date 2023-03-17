import React, { useState, useEffect } from 'react';

function Countdown() {
  const [countdown, setCountdown] = useState(24 * 60 * 60); // waktu dalam detik

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hours = Math.floor(countdown / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = Math.floor(countdown % 60);

  return (
    <div>
      <p>{hours.toString().padStart(2, '0')} : {minutes.toString().padStart(2, '0')} : {seconds.toString().padStart(2, '0')}</p>
    </div>
  );
}

export default Countdown;