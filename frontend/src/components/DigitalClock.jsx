import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DateTime } from 'luxon';

const StyledDigitalClock = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 5px;
`;

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(DateTime.now());

  useEffect(() => {
    // Her saniye saat güncellenir
    const interval = setInterval(() => {
      setCurrentTime(DateTime.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toFormat('HH:mm:ss');

  return <StyledDigitalClock>{formattedTime}</StyledDigitalClock>;
};

export default DigitalClock;
