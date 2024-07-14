import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  useEffect(() => {
    // Initialize Typed.js
    var typed = new Typed('#element', {
      strings: ['web developer', 'Frontend developer','Backend developer','Java developer'],
      typeSpeed: 70,
      backSpeed:70,
      backDelay:1000,
      loop:true
    });

    // Clean up function to destroy Typed instance
    return () => {
      typed.destroy();
    };
  }, []);

  return <span id="element"></span>;
};

export default TypedText;
