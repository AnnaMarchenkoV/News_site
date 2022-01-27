/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { useSelector } from 'react-redux';
import './Greeting.css';

const Greeting = () => {
  const userName = useSelector((state) => state?.user?.userData?.name);
  return (userName) ? (
    <div id="e61c6c0e-c8d0-4896-bf2a-97262987b250" className="header__greetings">
      Hello,
      {' '}
      {userName}
      {' '}
    </div>
  ) : null;
};

export default Greeting;
