import React, { useState } from 'react';
import rohit from './assets/download.jpeg';

export default function Profile({ name, bio, inbgcolor }) {
  const [bgcolor, setbgcolor] = useState(inbgcolor);

  function mouseenter() {
    setbgcolor("linear-gradient(135deg, #FFD700, #FFA07A)");
  }

  function mouseleave() {
    setbgcolor(inbgcolor);
  }

  return (
    <div
      className='profile-card'
      style={{ background: bgcolor, color: '#333' }}
      onMouseEnter={mouseenter}
      onMouseLeave={mouseleave}
    >
      <img src={rohit} alt={name} />
      <h1>{name}</h1>
      <p>{bio}</p>
    </div>
  );
}
