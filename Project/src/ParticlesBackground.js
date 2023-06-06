import React, { useEffect, useRef } from 'react';
import particlesJS from 'particles.js';

const ParticlesBackground = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    particlesJS.load('particles-js', '/particles-config.json');
  }, []);

  return <div id="particles-js" ref={particlesRef}></div>;
};

export default ParticlesBackground;
